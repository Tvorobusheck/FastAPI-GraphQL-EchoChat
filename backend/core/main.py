from fastapi import FastAPI, Depends
from pydantic import BaseModel
from db import get_db, database
from sqlalchemy.orm import Session
import strawberry
from strawberry.fastapi import GraphQLRouter

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str

@strawberry.type
class Query:
    @strawberry.field
    def hello_world(self) -> str:
        return "Hello from GQL server!"

schema = strawberry.Schema(query=Query)
graphql_app = GraphQLRouter(schema)

@app.get("/")
async def read_root():
    return {"message": "Hello, World!"}

@app.post("/items/")
async def create_item(item: Item, db: Session = Depends(get_db)):
    db_item = Item(name=item.name, description=item.description)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

app.include_router(graphql_app, prefix="/graphql")

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)