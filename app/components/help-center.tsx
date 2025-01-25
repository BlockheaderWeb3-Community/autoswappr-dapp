"use client";
import * as React from "react";
import { useState } from "react";
import Select from "./selectOption";
import Image from "next/image";

function HelpCenter() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = (form.email as HTMLInputElement).value.trim();
    const subject = (form.subject as HTMLSelectElement).value.trim();
    const details = (form.details as HTMLTextAreaElement).value.trim();

    if (!email || !subject || !details) {
      alert("Please fill out all required fields.");
      return;
    }

    alert("Form submitted successfully!");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);

      if (files && files.length > 0) {
        setSelectedFiles(Array.from(files));
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    if (event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files) as File[];
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <main className="relative">
      {/* <Navbar /> */}
      <div className="text-center w-full mt-0 flex flex-col justify-start items-center pt-24 lg:pt-32 md:pt-44">
        <div className="w-full h-[138px] bg-main-bg bg-cover absolute top-0 -z-10"></div>

        <div className="flex md:flex-row flex-col justify-between mx-auto md:px-24 px-6 w-full md:w-[80%] mt-20">
          <div className=" md:w-[698px] w-full">
            <div className="text-start text-white mb-14">
              <div className="w-full border-[#382E56] mb-5">
                <h2 className="text-[20px] font-semibold">Help Support</h2>
              </div>
              <p className="text-[16px] font-normal">
                We are on standby to listen to what you have to say about your
                experience with Autoswappr. So don’t shy away from contacting
                our Help Center Team.
              </p>
            </div>
            <div className="text-start mb-12 text-white">
              <div className="w-full pb-5 border-b-[1px] border-[#382E56] mb-5">
                <h2 className="text-[20px] font-semibold">Support</h2>
              </div>
              <p className="text-[14px]">
                Have questions or need assistance? Fill out the form below, and
                our team will get back to you within 24-48 hours.
              </p>
            </div>
            <form
              className="flex flex-col text-white gap-y-10 text-start mb-20"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-y-5">
                <label htmlFor="email">
                  Your email address <span className="text-[#FC8181]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your email address"
                  className="p-[16px] rounded-lg bg-[#100827]"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-y-5">
                <label htmlFor="subject">
                  Subject <span className="text-[#FC8181]">*</span>
                </label>
                <Select />
                <p className="text-[14px]">
                  Choose a reason that best describes your current issue.
                </p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p>
                  Additional details <span className="text-[#FC8181]">*</span>
                </p>
                <textarea
                  cols={10}
                  rows={7}
                  placeholder="Write your message here…"
                  className="px-[16px] py-[12px] bg-[#100827] rounded-lg"
                  name="details"
                />
                <p className="text-[14px]">
                  To provide the best assistance, please include as much detail
                  as possible. This could involve listing the troubleshooting
                  steps you have already attempted and attaching screenshots of
                  any error messages you have encountered.
                </p>
              </div>
              <div className="flex flex-col gap-y-5">
                <p>Attachments(Optional)</p>
                <div
                  className="flex items-center justify-center w-full"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <label
                    htmlFor="attachments"
                    className={`flex flex-row items-center justify-center w-full h-[54px] rounded-lg ${
                      isDragOver ? "bg-blue-300" : "bg-[#100827]"
                    } cursor-pointer px-4`}
                  >
                    <div className="flex flex-row items-center justify-center gap-3 overflow-hidden">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          strokeWidth="1"
                          stroke="currentColor"
                          fill="none"
                        />
                        <line
                          x1="12"
                          y1="8"
                          x2="12"
                          y2="16"
                          strokeWidth="1"
                          stroke="currentColor"
                        />
                        <line
                          x1="8"
                          y1="12"
                          x2="16"
                          y2="12"
                          strokeWidth="1"
                          stroke="currentColor"
                        />
                      </svg>

                      <p className="text-sm text-[#433B5A] truncate w-full">
                        {selectedFiles.length > 0
                          ? selectedFiles.map((file) => file.name).join(", ")
                          : "Add file or drop files here"}
                      </p>
                    </div>

                    <input
                      id="attachments"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="py-4 md:w-full w-auto  flex items-center justify-center bg-[#0F96E3] rounded-lg text-[16px]"
              >
                Done
              </button>
            </form>
          </div>
          <div className="w-full md:w-[113px] text-start relative md:mb-0 mb-[100px] pl-2 md:pl-0">
            <h3 className="text-[20px] text-[#F9F9F9]">Community</h3>
            <ul className="mt-5 ml-5 text-start text-[14px] text-[#D2CED8] flex flex-col gap-5 list-disc underline cursor-pointer">
              <li>Discord</li>
              <li>Telegram</li>
              <li>Github</li>
            </ul>
            <div className="absolute -left-8 top-[200px]">
              <Image
                src="Star Sparkle.svg"
                alt="Star Sparkle"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[138px] bg-main-bg bg-cover absolute -bottom-20 transform rotate-180 -z-10"></div>
      </div>
    </main>
  );
}

export default HelpCenter;
