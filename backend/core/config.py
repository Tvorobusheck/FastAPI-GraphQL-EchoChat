from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=".env")

DB_DRIVER = os.environ.get("DB_DRIVER")
DB_HOST = os.environ.get("DB_HOST")
DB = os.environ.get("POSTGRES_DB")
DB_USER = os.environ.get("POSTGRES_USER")
DB_PASSWORD = os.environ.get("POSTGRES_PASSWORD")
DEBUG = os.environ.get("DEBUG")

ROUTER_DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
