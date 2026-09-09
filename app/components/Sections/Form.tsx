"use client";

import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import emailjs from "@emailjs/browser";
type Fields = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const [error, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldValues, setFieldValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (stateKey: string, value: string) => {
    setFieldValues({
      ...fieldValues,
      [stateKey]: value,
    });
  };

  const sendEmail = async () => {
    setLoading(true);
    const requiredFields: (keyof Fields)[] = ["name", "email", "message"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const missingFields = requiredFields.filter(
      (field) => !fieldValues[field].trim(),
    );
    if (missingFields.length > 0) {
      setLoading(false);
      setErrorMessage("Please fill in all requiered fields");
      return;
    }
    if (!emailRegex.test(fieldValues.email)) {
      setErrorMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    try {
      const serviceId = process.env.NEXT_PUBLIC_SERVICEID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATEID;
      const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing");
      }
      const templateParams = {
        name: fieldValues.name,
        email: fieldValues.email,
        message: fieldValues.message,
      };
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );
      setLoading(false);
      setFieldValues({
        name: "",
        email: "",
        message: "",
      });
      setErrorMessage("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      console.log("Email sent successfully:", response);
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Something went wrong. Try again");
      setLoading(false);
    }
  };

  const inputFields = [
    {
      label: "What's your name?",
      type: "text",
      id: "name",
      placeholder: "Name",
      stateKey: "name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      placeholder: "email@email.com",
      stateKey: "email",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg space-y-6">
      {inputFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <label className="text-sm text-black/70 font-medium tracking-[-0.5px]">
            {field.label}
          </label>
          <input
            type={field.type}
            placeholder={field.placeholder}
            onChange={(e) => handleInputChange(field.stateKey, e.target.value)}
            className={`px-4 py-3 bg-[#ebebeb] rounded-sm placeholder:text-black/70 ${errorMessage && "border border-rose-500"}`}
          />
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-black/70 font-medium tracking-[-0.5px]">
          How can I help you?
        </label>
        <textarea
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Tell me more about your project or idea!"
          rows={3}
          className={`py-3 px-4 bg-[#ebebeb] rounded-sm resize-y w-full placeholder:text-black/70 ${errorMessage && "border border-rose-500"}`}
        ></textarea>
      </div>
      {errorMessage && (
        <p className="text-rose-500! text-sm text-center">{errorMessage}</p>
      )}
      {sucess && (
        <p className="text-green-500! text-sm text-center">Email Sent!</p>
      )}
      <div className="flex justify-center">
        <button
          onClick={sendEmail}
          className="font-semibold bg-black text-white py-3 rounded-full w-full hover:bg-black/90 duration-300 cursor-pointer flex justify-center"
        >
          {loading ? (
            <VscLoading className="animate-spin text-2xl" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </div>
  );
}
