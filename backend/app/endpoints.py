import os
from typing import Optional
from fastapi import APIRouter, Request, HTTPException
from fastapi.applications import FastAPI
from fastapi.responses import FileResponse
from app.books import BookController


class Endpoints(FastAPI):
    def __init__(self, path):
        self.router = APIRouter()
        self.path = path
        self.books = BookController(path)

        @self.router.get("/")
        async def get_info():
            return {"name": "Book Server", "version": "0.0.1"}

        @self.router.get("/books")
        async def get_books():
            books = self.books._get_books()
            return {"books": books}

        @self.router.get("/book/{id}")
        async def get_chapters_by_id(id: int):
            books = self.books._get_books()
            for book in books:
                if book.startswith("Book " + str(id)):
                    return self.books._get_chapters(book)

            raise HTTPException(status_code=404, detail="Book not found")

        @self.router.get("/book")
        async def get_chapters_by_name(name: Optional[str] = None):
            return self.books._get_chapters(name)

        @self.router.get("/chapter")
        async def get_chapter(book_name: str, chapter: str):
            if book_name is None or chapter is None:
                raise HTTPException(status_code=400, detail="Requires book_name and chapter query parameters")

            file_path = self.path + "/" + book_name + "/" + chapter

            if os.path.exists(file_path):
                return FileResponse(file_path)

            raise HTTPException(status_code=404, detail="Chapter not found")

    def get_router(self):
        return self.router
