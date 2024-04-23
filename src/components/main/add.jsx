
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";
import {
  useCreateCategoriaMutation,
  useGetCategoryQuery,
  useDeleteCategorieMutation,
  useUpdateCategorieMutation,
} from "../../redux/slice/CategoriesCrud/crud";

const AddCategories = () => {
  const [open, setOpen] = useState(false);
  const [createCategoria, { isLoading: isCreating }] = useCreateCategoriaMutation();
  const [inputValue, setInputValue] = useState({
    name: "",
    img: "",
    price: "", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", inputValue?.name);
    if (inputValue.img) {
      formData.append("image", inputValue.img);
    }
    formData.append("price", inputValue.price); // Append the price to the form data

    try {
      await createCategoria(formData).unwrap();
      toast.success(`Category ${inputValue.name} added successfully`);
      setInputValue({
        name: "",
        img: "",
        price: "", // Reset the price state
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Failed to add category ${inputValue.name}`);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        + Mahsulod qo'shish
      </Button>
        title="Add Category"
        visible={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={isCreating} onClick={handleSubmit}>
            Add
          </Button>,
        ]}
      
        <div className="flex flex-col gap-3">
          <div>
            <label>Mahsulod turi nomi:</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
          <div>
            <label>Mahsulod narxi:</label>
            <input
              type="number" // Use type "number" for the price input
              step="0.01"
              min="0"
              value={inputValue.price} // Use inputValue.price for the value
              onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
        </div>
   
    </div>
  );
};

export default AddCategories;
