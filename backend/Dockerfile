FROM python:3.9.7-slim

COPY . /application
WORKDIR /application

RUN apt-get update -y && apt-get install -y build-essential

RUN python3 -m venv /opt/venv
RUN python3 -m pip install -U pip
RUN /opt/venv/bin/pip3 install -r requirements.txt

ENV PYTHONPATH=$PYTHONPATH:/application

CMD ["/opt/venv/bin/python3", "/application/app/api.py"]
