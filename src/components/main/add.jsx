import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal, Button } from "antd";
import { useCreateTable2Mutation } from "../../redux/slice/user";



const AddCategories = () => {
  const [open, setOpen] = useState(false);
  const [createCategoria, { isLoading: isCreating }] = useCreateTable2Mutation();
  const [inputValue, setInputValue] = useState({
    id: "",
    first_name: "",
    last_name: "",
    rasm: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", inputValue?.id);
    formData.append("first_name", inputValue?.first_name);
    formData.append("last_name", inputValue?.last_name);
    formData.append("phone", inputValue?.phone);

    try {
      await createCategoria(formData).unwrap();
      toast.success(`Category ${inputValue.username} added successfully`);
      setInputValue({
        id: "",
        first_name: "",
        last_name: "",
        phone: "",
      });
      setOpen(false);
    } catch (error) {
      toast.error(`Failed to add category ${inputValue.username}`);
    }
  };

  return (
    <div>
      <Button type="primary" onClick={() => setOpen(true)}>
        + Odam qo'shish 
      </Button>
      <Modal
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
      >
        <div className="flex flex-col gap-3">
          <div>
            <label>ID:</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, id: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, first_name: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              onChange={(e) => setInputValue({ ...inputValue, last_name: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="number"
              onChange={(e) => setInputValue({ ...inputValue, phone: e.target.value })}
              className="block w-full px-2 py-1.5 text-gray-400 bg-transparent border border-gray-300 rounded-lg text-sm p-1.5 dark:border-gray-600 dark:hover:text-gray-900"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddCategories;
