import React from "react";
import { Form, Input, Button } from "./CreateCategoryStyled";

function CreateCategory() {
 

  return (
    <>
      <h3>Create Category</h3>
      <Form>
        <Input
          type="text"
          name="name"
          placeholder="Category Name"
        />
        <Button type="submit">Add Category</Button>
      </Form>
    </>
  );
}

export default CreateCategory;