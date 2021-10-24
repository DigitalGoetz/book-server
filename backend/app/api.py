import os
import logging
from typing import Optional
from uvicorn import Config, Server
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.endpoints import Endpoints


ORIGINS = ["*"]
PATH = "."

if "BOOK_PATH" in os.environ:
    PATH = os.environ.get("BOOK_PATH")

main = FastAPI()
router = Endpoints(PATH)
main.include_router(router.get_router())
main.add_middleware(CORSMiddleware, allow_origins=ORIGINS, allow_credentials=True, allow_methods=["*"], allow_headers=["*"])


if __name__ == "__main__":
    logging.basicConfig(format="%(levelname)s:%(message)s", level=logging.DEBUG)
    server = Server(Config("app.api:main", host="0.0.0.0", port=4001, log_level=logging.getLevelName("DEBUG")))
    server.run()
