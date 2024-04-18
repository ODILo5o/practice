import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateTable2Mutation } from "../../redux";
import { Button, Modal } from 'antd';

const UserAddCom = () => {
  const [createUser] = useCreateTable2Mutation();

  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    date: "",
    time: "",
    diagnosis: "",
    treatment: "",
    amount: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const adData = async () => {
    try {
      await createUser(userInfo).unwrap();
      toast.success("User successfully added");
      setModal(false);
      setUserInfo({
        first_name: "",
        date: "",
        time: "",
        diagnosis: "",
        treatment: "",
        amount: ""
      });
    } catch (error) {
      toast.error(
        `Error adding user: ${error.data?.error || "Please try again"}`
      );
    }
  };

  return (
    <>
      <Button type="primary" onClick={() => setModal(true)}>+Добавить пациента</Button>
      <Modal
        title="Добавить пациента"
        visible={modal}
        onCancel={() => setModal(false)}
        footer={[
          <Button key="cancel" onClick={() => setModal(false)}>
            Отмена
          </Button>,
          <Button key="submit" type="primary" onClick={adData}>
            Добавить
          </Button>
        ]}
      >
        <div className="grid gap-8 mb-10 grid-cols-2">
          <div className="col-span-2 text-start">
            <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Имя</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                name="first_name"
                value={userInfo.first_name}
                onChange={handleInputChange}
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Имя...."
              />
            </div>
          </div>
          <div className="flex gap-5 text-start">
            <div className="col-span-1">
              <label htmlFor="date">Дата </label>
              <input
                type="date"
                id="date"
                name="date"
                value={userInfo.date}
                onChange={handleInputChange}
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Дата"
                required
              />
            </div>
            <div className="col-span-1">
              <label htmlFor="time">Время</label>
              <input
                type="time"
                id="time"
                name="time"
                value={userInfo.time}
                onChange={handleInputChange}
                className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Время"
              />
            </div>
          </div>
          <div className="col-span-2 text-start">
            <label htmlFor="diagnosis">Диагноз</label>
            <input
              type="text"
              id="diagnosis"
              name="diagnosis"
              value={userInfo.diagnosis}
              onChange={handleInputChange}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Диагноз"
              required
            />
          </div>
          <div className="col-span-2 text-start">
            <label htmlFor="treatment">Лечение</label>
            <input
              type="text"
              id="treatment"
              name="treatment"
              value={userInfo.treatment}
              onChange={handleInputChange}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Лечение"
              required
            />
          </div>
          <div className="col-span-2 text-start">
            <label htmlFor="amount">Сумма</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={userInfo.amount}
              onChange={handleInputChange}
              className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Сумма"
              required
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserAddCom;