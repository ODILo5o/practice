import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateTable2Mutation } from "../../redux";

const UserAddComm = () => {
  const [createUser] = useCreateTable2Mutation();

  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    full_name: "",
    diagnosis: "",
    treatment: "",
    amount: "",
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
        last_name: "",
        full_name: "",
        diagnosis: "",
        treatment: "",
        amount: "",
      });
    } catch (error) {
      toast.error(
        `Error adding user: ${error.data?.error || "Please try again"}`
      );
    }
  };

  return (
    <div>
      <button onClick={() => setModal(true)}>+Добавить пациента</button>
      {modal && (
        <div className=" fixed top-0 left-[480px] right-0 bottom-0 p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex bg-#FCFCFC shadow-lg items-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <button
                onClick={() => setModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <span className="sr-only">Close modal</span> Назад
              </button>
            </div>
            <div className="flex items-center p-4 md:p-5  rounded-t dark:border-gray-600">
              <h2 className="text-lg text-start font-semibold text-gray-900 dark:text-white">
                Добавить пациента
              </h2>
            </div>
            <div className="p-8 md:p-10">
              <div className="grid gap-8 mb-10 grid-cols-2">
                <div className="grid gap-8 mb-10 grid-cols-3">
                  <div className="col-span-1 flex flex-col text-start">
                    <label htmlFor="first_name">Имя</label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={userInfo.first_name}
                      onChange={handleInputChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Имя"
                      required
                    />
                  </div>
                  <div className="col-span-1 flex flex-col text-start">
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={userInfo.last_name}
                      onChange={handleInputChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Фамилия"
                      required
                    />
                  </div>
                  <div className="col-span-1 flex flex-col text-start">
                    <label htmlFor="full_name">Отчество</label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={userInfo.full_name}
                      onChange={handleInputChange}
                      className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Отчество"
                      required
                    />
                  </div>
                </div>

                <div className="col-span-2 text-start">
                  <label htmlFor="diagnosis">Номер телефона</label>
                  <input
                    type="text"
                    id="diagnosis"
                    name="diagnosis"
                    value={userInfo.diagnosis}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+998"
                    required
                  />
                </div>
                <div className="col-span-1 text-start">
                  <label htmlFor="date">Дата </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={userInfo.date}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Дата"
                    required
                  />
                </div>
                <div className="col-span-2 text-start">
                  <label htmlFor="amount">Адрес</label>
                  <input
                    type="text"
                    id="amount"
                    name="amount"
                    value={userInfo.amount}
                    onChange={handleInputChange}
                    className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-black focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <button
                onClick={adData}
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ms-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAddComm;
