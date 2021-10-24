import os


class BookController:
    def __init__(self, path):
        self.path = path

    def _get_books(self):
        books = []
        dir_contents = os.listdir(self.path)

        for item in dir_contents:
            if os.path.isdir(self.path + "/" + item):
                books.append(item)
        books.sort()
        return books

    def _get_chapters(self, book):
        chapters = []
        book_contents = os.listdir(self.path + "/" + book)

        for chapter in book_contents:
            if os.path.isfile(self.path + "/" + book + "/" + chapter):
                chapters.append(chapter)

        chapters.sort()
        return {"chapters": chapters, "book": book}
