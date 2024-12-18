"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  ButtonGroup,
  Listbox,
  ListboxItem,
  Divider,
  Input,
  Tooltip,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { db } from "@/firebase";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Chrono } from "react-chrono";
import { EyeIcon } from "../drivers/EyeIcon";
import { EditIcon } from "../drivers/EditIcon";
import { DeleteIcon } from "../drivers/DeleteIcon";
import { GoDownload } from "react-icons/go";
import { GoArchive } from "react-icons/go";

const Page = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setselectedFile] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [issueDate, setIssueDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleIssueDateChange = (date) => {
    setIssueDate(date);
  };

  useEffect(() => {
    // Reference to your collection
    const filesCollection = collection(db, "records"); // Replace with your actual collection name

    // Set up a real-time listener
    const unsubscribe = onSnapshot(filesCollection, (snapshot) => {
      const files = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUploadedFiles(files);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleFileSelection = (e) => {
    const selectedFile = e.target.files[0];
    setselectedFile(selectedFile);
    setSelectedFileName(selectedFile.name);
  };

  const openFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleUploadDoc = async (e) => {
    try {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "records"), {
        filename: selectedFileName,
        timestamp: serverTimestamp(),
        issueDate: issueDate,
        expirationDate: selectedDate,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Convert uploadedFiles to Chrono items
  const timelineItems = uploadedFiles.map((file) => ({
    title: file.filename,
    cardTitle: file.filename,
    cardSubtitle: `Created: ${file.timestamp?.toDate().toLocaleString()}`,
    cardDetailedText: `Issue Date: ${file.issueDate
      ?.toDate()
      .toLocaleString()} - Expiration Date: ${file.expirationDate
      ?.toDate()
      .toLocaleString()}`,
  }));

  return (
    <div className="bg-white flex">
      <div className="sidebar w-80 bg-blue-500 mr-6 hidden md:block"></div>
      <div className="flex min-h-screen flex-col pt-10 py-20 w-[90%] mx-auto text-black">
        {/* <h1 className="text-xl font-bold text-blue-950 mb-4">Upload Module</h1> */}
        {/* <div className="max-w-md mb-4">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileSelection}
          />
          <div
            className={`border border-dashed border-gray-500 rounded-xl h-24 flex items-center justify-center w-full hover:border-blue-800 hover:bg-foreground-100 hover:cursor-pointer transition-all`}
            onClick={openFileInput}
          >
            {selectedFileName ? (
              <p className="text-sm text-default-500 text-center">
                {selectedFileName}
              </p>
            ) : (
              <p className="text-sm text-default-500 text-center">
                Click to choose a file or drag and drop it here
              </p>
            )}
          </div>
        </div>
        <p>Issue Date</p>
        <DatePicker
          className="bg-neutral-300 border text-black rounded-lg pl-4"
          selected={issueDate}
          onChange={handleIssueDateChange}
        />
        <p>Expiration Date</p>
        <DatePicker
          className="bg-neutral-300 border text-black rounded-lg pl-4"
          selected={selectedDate}
          onChange={handleDateChange}
        />
        <Button
          disabled={!selectedFile}
          className="mt-4 w-24"
          onPress={handleUploadDoc}
        >
          Upload
        </Button>
        <div className="bg-yellow-400 rounded-xl w-16 h-[6px] mt-3 mb-6"></div> */}
        <h1 className="text-xl font-bold text-blue-950">Uploaded Documents</h1>
        <div className="bg-yellow-400 rounded-xl w-16 h-[6px] mt-3 mb-6"></div>
        <div className="w-full flex flex-col items-baseline">
          {/* <div className="w-full flex flex-col sm:flex-row items-center sm:items-baseline">
            <div className="w-4/5 sm:w-1/2 bg-gray-200 border rounded-xl py-6 px-10 space-y-2 sm:space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-950 w-5 h-[2px] sm:h-1 -ml-10 rounded-r-xl mr-5"></div>
                <p className="text-lg font-bold text-blue-950">
                  Truck Insurance Physical
                </p>
              </div>
              <Divider />
              <p className="text-lg text-blue-950 hover:font-semibold hover:cursor-pointer transition-all">
                Truck Insurance Liability
              </p>
              <Divider />
              <p className="text-lg text-blue-950 hover:font-semibold hover:cursor-pointer transition-all">
                Lease Paperwork
              </p>
              <Divider />
              <p className="text-lg text-blue-950 hover:font-semibold hover:cursor-pointer transition-all">
                Registration
              </p>
              <Divider />
              <p className="text-lg text-blue-950 hover:font-semibold hover:cursor-pointer transition-all">
                Annual Inspection
              </p>
              <Divider />
              <p className="text-lg text-blue-950 hover:font-semibold hover:cursor-pointer transition-all">
                Other Documents
              </p>
            </div>
            <div className="w-full p-4 flex flex-wrap justify-evenly space-y-4 space-x-4">
              {uploadedFiles.map((file, index) => (
                <Card
                  key={file.id}
                  className={`py-4 sm:hover:scale-[1.03] transition-all ${
                    index === 0 ? "mt-4 ml-4" : ""
                  }`}
                >
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-sm font-bold pb-3 max-w-[150px]">
                      {file.filename}
                    </p>
                    <div className="flex w-full justify-between">
                      <p className="text-default-500 text-tiny">Created:</p>
                      <p className="text-default-500 text-tiny">
                        {file.uploadDate}
                      </p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="text-default-500 text-tiny">
                        Expiration Date:
                      </p>
                      <p className="text-default-500 text-tiny">
                        {file.expirationDate?.toDate().toLocaleString()}
                      </p>
                    </div>
                    <div className="flex w-full justify-between">
                      <p className="text-default-500 text-tiny">
                        Auto Delete in:
                      </p>
                      <p className="text-default-500 text-tiny">Never</p>
                    </div>
                  </CardHeader>
                  <CardBody className="overflow-visible py-4 flex items-center justify-center">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl w-32"
                      src="/pdfblue.png"
                      width={270}
                    />
                  </CardBody>
                  <CardFooter className="flex items-center justify-center">
                    <ButtonGroup className="">
                      <Button
                        color="warning"
                        className="text-white bg-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Button>
                      <Button
                        color="primary"
                        className="text-white bg-blue-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                          />
                        </svg>
                      </Button>
                      <Button color="danger" className="text-white bg-blue-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div> */}
          <div className=" w-full pr-24">
            <Tabs
              aria-label="Options"
              isVertical
              size="lg"
              classNames={{ tab: "px-8", tabContent: "py-1" }}
            >
              <Tab
                key="Truck Insurance Physical"
                title="Truck Insurance Physical"
                className="flex-1"
              >
                <div className="w-full">
                  <Table
                    fullWidth
                    isCompact
                    removeWrapper
                    color="primary"
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex flex-row items-center">
                            <Image
                              src="Designer.jpeg"
                              width={1000}
                              height={1000}
                              alt="pdf"
                              className="w-12 h-12 mr-3"
                            />
                            <div className="flex flex-col">
                              <p className="font-medium">Custom Document Name Example</p>
                              <p className=" text-xs italic">
                                WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="View"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Download"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <GoDownload />
                              </span>
                            </Tooltip>
                            <Tooltip content="Archive">
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <GoArchive />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex flex-row items-center">
                            <Image
                              src="pdfblue.png"
                              width={1000}
                              height={1000}
                              alt="pdf"
                              className="w-12 h-12 mr-3"
                            />
                            <p className="font-medium">
                              Proposal-Quantity-Based-Progress-Tracking-for-Dispatch-Page-1327961718048093.pdf
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="danger"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Expired</p>
                          </Chip>
                        </TableCell>
                        <TableCell>04/10/2024</TableCell>
                        <TableCell>06/08/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="View"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Download"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <GoDownload />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex flex-row items-center">
                            <Image
                              src="pdfblue.png"
                              width={1000}
                              height={1000}
                              alt="pdf"
                              className="w-12 h-12 mr-3"
                            />
                            <p className="font-medium">
                              Proposal79836524.pdf
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="danger"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Expired</p>
                          </Chip>
                        </TableCell>
                        <TableCell>04/10/2024</TableCell>
                        <TableCell>06/08/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="View"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Download"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <GoDownload />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex flex-row items-center">
                            <Image
                              src="pdfblue.png"
                              width={1000}
                              height={1000}
                              alt="pdf"
                              className="w-12 h-12 mr-3"
                            />
                            <p className="font-medium ">
                              Proposal79836524.pdf
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="danger"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Expired</p>
                          </Chip>
                        </TableCell>
                        <TableCell>04/10/2024</TableCell>
                        <TableCell>06/08/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="View"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Download"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <GoDownload />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
              <Tab
                key="Truck Insurance Liabilty"
                title="Truck Insurance Liability"
                className="flex-1"
              >
                <div className="w-full">
                  <Table
                    fullWidth
                    removeWrapper
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Proposal-Quantity-Based-Progress-Tracking-for-Dispatch-Page-1327961718048093.pdf
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="danger"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Expired</p>
                          </Chip>
                        </TableCell>
                        <TableCell>04/10/2024</TableCell>
                        <TableCell>06/08/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
              <Tab
                key="Lease Paperwork"
                title="Lease Paperwork"
                className="flex-1"
              >
                <div className="w-full">
                  <Table
                    fullWidth
                    removeWrapper
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          Proposal-Quantity-Based-Progress-Tracking-for-Dispatch-Page-1327961718048093.pdf
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="danger"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Expired</p>
                          </Chip>
                        </TableCell>
                        <TableCell>04/10/2024</TableCell>
                        <TableCell>06/08/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">10 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
              <Tab key="Registration" title="Registration" className="flex-1">
                <div className="w-full">
                  {/* <p className="mb-2 font-bold">Registration</p> */}
                  <Table
                    removeWrapper
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">3 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
              <Tab
                key="Annual Inspection"
                title="Annual Inspection"
                className="flex-1"
              >
                <div className="w-full">
                  {/* <p className="mb-2 font-bold">Registration</p> */}
                  <Table
                    removeWrapper
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">3 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
              <Tab
                key="Other Documents"
                title="Other Documents"
                className="flex-1"
              >
                <div className="w-full">
                  {/* <p className="mb-2 font-bold">Registration</p> */}
                  <Table
                    removeWrapper
                    aria-label="Example table with dynamic content"
                  >
                    <TableHeader>
                      <TableColumn>Filename</TableColumn>
                      <TableColumn>Status</TableColumn>
                      <TableColumn>Upload Date</TableColumn>
                      <TableColumn>Expiration Date</TableColumn>
                      <TableColumn>Auto Delete</TableColumn>
                      <TableColumn>Actions</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          WhatsApp-Image-2024-06-10-at-113005-AM769861718048082.jpeg
                        </TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="success"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">Active</p>
                          </Chip>
                        </TableCell>
                        <TableCell>06/10/2024</TableCell>
                        <TableCell>07/04/2024</TableCell>
                        <TableCell>
                          <Chip
                            className="capitalize"
                            color="warning"
                            size="sm"
                            variant="flat"
                          >
                            <p className="text-xs">3 Years</p>
                          </Chip>
                        </TableCell>
                        <TableCell>
                          <div className="relative flex items-center gap-2">
                            <Tooltip
                              content="Details"
                              className="text-default-900"
                            >
                              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                              </span>
                            </Tooltip>
                            <Tooltip
                              content="Edit user"
                              className="text-default-900"
                            >
                              <span className="text-lg text-blue-600 cursor-pointer active:opacity-50">
                                <EditIcon />
                              </span>
                            </Tooltip>
                            <Tooltip color="danger" content="Delete user">
                              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                <DeleteIcon />
                              </span>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
