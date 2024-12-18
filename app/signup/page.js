"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import {
  Checkbox,
  Input,
  Link,
  Progress,
  Button,
  Tooltip,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { MailIcon } from "../components/MailIcon";
import { LockIcon } from "../components/LockIcon";
import InfoIcon from "../components/InfoIcon";
import { useRouter } from "next/navigation";
import { CiDeliveryTruck } from "react-icons/ci";

const Page = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedRecords, setAgreedRecords] = useState(false);
  const [verified, setVerified] = useState(false);

  const [fleet, setFleet] = React.useState(1);
  const [isSelected, setIsSelected] = React.useState(true);
  const [selectedPlan, setSelectedPlan] = React.useState("");
  const basicPrice = isSelected ? 12.5 : 15;
  const basicPriceOriginal = 15;
  const optimusplusPrice = isSelected ? 25 : 30;
  const optimusplusPriceOriginal = 30;
  const basicTotal = basicPrice * fleet;
  const optimusplusTotal = optimusplusPrice * fleet;

  const handleSelectionChange = (e) => {
    setFleet(e.target.value);
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate Step 1 fields (email, password, fullName) if needed
      if (validateStep1() == true) {
        // Move to Step 2
        setStep(2);
        setValue(25); // Update progress bar value for Step 2
      }
    } else if (step === 2) {
      setStep(3);
      setValue(50);
    } else if (step === 3) {
      setStep(4);
      setValue(75);
    } else if (step === 4) {
      setStep(5);
      setValue(100);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
      setValue(0);
    } else if (step === 3) {
      setStep(2);
      setValue(25);
    } else if (step === 4) {
      setStep(3);
      setValue(50);
    } else if (step === 5) {
      setStep(4);
      setValue(75);
    }
  };

  const handleVerifyEmail = () => {
    // Additional logic for email verification, if needed
    setVerified(true);
  };

  const validateStep1 = () => {
    // Perform validation for Step 1 fields
    const isValid =
      fullName && email && password && agreedTerms && agreedRecords;
    if (!isValid) {
      // Display an error message or handle validation feedback
      console.error(
        "Please fill out all required fields and agree to the terms."
      );
    }
    return isValid;
  };

  const selectBasic = () => {
    setSelectedPlan("Basic");
    handleNextStep();
  };

  const selectOptimus = () => {
    setSelectedPlan("Optimus+");
    handleNextStep();
  };

  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (e) => {
    // Remove non-numeric characters from the input
    const formattedValue = e.target.value.replace(/\D/g, "");

    // Limit to a maximum of 16 digits
    const limitedValue = formattedValue.slice(0, 16);

    // Add spaces every four digits
    const formattedCardNumber = limitedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Update the state with the formatted value
    setCardNumber(formattedCardNumber);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (input) => {
    // Remove non-numeric characters from input
    let formattedNumber = input.replace(/\D/g, "");

    // Ensure maximum length of 10 digits
    formattedNumber = formattedNumber.slice(0, 10);

    // Apply the desired phone number format
    if (formattedNumber.length === 10) {
      formattedNumber = formattedNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        "($1) $2-$3"
      );
    }

    // Update the state with the formatted number
    setPhoneNumber(formattedNumber);
  };

  return (
    <div className="bg-slate-200">
      <div className="flex min-h-screen flex-col items-center pb-24 pt-10 max-w-7xl mx-auto px-4">
        <Image
          src={"/LogoOptimusBlue.png"}
          width={3638}
          height={733}
          className="w-96 mb-12 -ml-5 px-10 sm:px-0"
        />
        <div className="bg-white w-full shadow-large h-[600px]">
          <div className="w-full flex h-full">
            <div className="lg:w-4/5 w-full flex flex-col items-center p-4 sm:p-9 justify-between">
              <div className="flex flex-col items-center w-full text-default-800 space-y-3">
                <div className="w-full h-6">
                  {step !== 1 && step !== 5 && (
                    <p className="w-full">
                      <Button
                        variant="light"
                        size="sm"
                        radius="full"
                        className="sm:-ml-6 sm:-mt-6 -ml-4"
                        onPress={handlePrevStep}
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
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                          />
                        </svg>
                      </Button>
                    </p>
                  )}
                </div>
                {/* Step 1: Email, Password, and Full Name */}
                {step === 1 && (
                  <>
                    <p className="mt-4 font-light text-3xl font-sans">
                      Let&apos;s Get Started.
                    </p>
                    <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2"></div>
                    <div className="sm:block hidden w-full">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        variant="bordered"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-unit-12 sm:h-14"
                      />
                    </div>
                    <div className="sm:hidden block w-full">
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        variant="bordered"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="h-unit-12 sm:h-14"
                      />
                    </div>
                    <Input
                      label="Phone Number"
                      placeholder="(201) 555-5555"
                      variant="bordered"
                      value={phoneNumber}
                      onChange={(e) => formatPhoneNumber(e.target.value)}
                      className="h-unit-12 sm:h-14"
                    />
                    <Input
                      endContent={
                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-unit-12 sm:h-14"
                    />
                    <Input
                      endContent={
                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="bordered"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-unit-12 sm:h-14"
                    />
                    <div className="flex flex-col w-full !mt-4 sm:!mt-6 sm:!mb-2 space-y-1 ml-2">
                      <Checkbox
                        isSelected={agreedTerms}
                        onValueChange={() => setAgreedTerms(!agreedTerms)}
                      >
                        <p className="text-sm sm:text-base">
                          I agree with the{" "}
                          <span className="text-blue-400">
                            <br className="sm:hidden" />
                            Terms of Use & Privacy Policy
                          </span>
                        </p>
                      </Checkbox>
                      <Checkbox
                        isSelected={agreedRecords}
                        onValueChange={() => setAgreedRecords(!agreedRecords)}
                      >
                        <p className="text-sm sm:text-base">
                          I agree to use{" "}
                          <span className="text-blue-400">
                            <br className="sm:hidden" />
                            Electronic Records and Signatures
                          </span>
                        </p>
                      </Checkbox>
                    </div>
                  </>
                )}

                {/* Step 2: Verify Email Address */}
                {step === 2 && (
                  <>
                    <p className="mt-4 font-thin text-3xl font-sans">Verify.</p>
                    <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2"></div>
                    {/* Add additional fields for Step 2 */}
                    <p>Please verify your email address</p>
                    <MailIcon className="text-4xl text-default-500 !mb-5" />
                    <Button
                      onClick={handleVerifyEmail}
                      auto
                      color={verified ? "success" : "default"}
                      disabled={verified}
                    >
                      {verified ? "Email Verified" : "Verify Email"}
                    </Button>
                  </>
                )}

                {/* Step 2: Plan Selection */}
                {step === 3 && (
                  <>
                    <p className="!mt-0 font-thin text-2xl sm:text-3xl font-sans">
                      Select a plan.
                    </p>
                    <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2 "></div>
                    <div className="flex w-full justify-between sm:px-16 pr-1 sm:pr-20">
                      <div className="flex flex-row w-full items-center justify-center pl-3">
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                          {/* <Select
                            label="Select fleet size"
                            size="sm"
                            className="w-36 sm:w-[200px]"
                            onChange={handleSelectionChange}
                            selectedKeys={[fleet]}
                            disallowEmptySelection
                          >
                            <SelectItem
                              key={"1"}
                              value={1}
                              className="text-gray-600"
                            >
                              1 truck
                            </SelectItem>
                            <SelectItem
                              key={"5"}
                              value={5}
                              className="text-gray-600"
                            >
                              5 trucks
                            </SelectItem>
                            <SelectItem
                              key={"10"}
                              value={10}
                              className="text-gray-600"
                            >
                              10 trucks
                            </SelectItem>
                            <SelectItem
                              key={"15"}
                              value={15}
                              className="text-gray-600"
                            >
                              15 trucks
                            </SelectItem>
                            <SelectItem
                              key={"20"}
                              value={20}
                              className="text-gray-600"
                            >
                              20 trucks
                            </SelectItem>
                          </Select> */}
                          <Input
                            className="w-28"
                            size="sm"
                            type="number"
                            label="Fleet Size"
                            labelPlacement="outside"
                            placeholder="0"
                            value={fleet}
                            startContent={
                              <CiDeliveryTruck className="mr-2" size={40} />
                            }
                            onChange={handleSelectionChange}
                          />
                        </div>
                      </div>
                      <Switch
                        isSelected={isSelected}
                        onValueChange={setIsSelected}
                        size="sm"
                        className="w-36"
                      >
                        <p className="text-tiny sm:text-xs w-24 font-semibold text-[#0279ed] ml-3">
                          Billed Yearly <br />
                          <span className="hidden sm:block">
                            Save 18% <br />{" "}
                          </span>
                          (2 Months off!)
                        </p>
                      </Switch>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 w-full !mb-6 justify-center !mt-5">
                      <div className="w-full sm:w-2/5 h-auto border rounded-md">
                        <div className="w-full h-4 rounded-t-md bg-gradient-to-b from-[#4abefc] to-[#1d93f8]"></div>
                        <div className="p-4 sm:p-8 w-full h-auto flex flex-col items-center sm:items-start">
                          <div className="flex flex-row sm:flex-col items-center justify-center sm:items-start sm:justify-start">
                            <p className="font-bold text-lg sm:text-xl sm:pb-1 mr-4 sm:mr-0">
                              Basic
                            </p>
                            <div className="flex flex-row items-center justify-center">
                              <p className="text-xl sm:text-4xl pr-2 sm:pr-4 font-light bg-gradient-to-b from-[#4abefc] to-[#1d93f8] bg-clip-text text-transparent">
                                ${basicPrice.toFixed(2)}
                              </p>
                              <div className="flex flex-col font-light">
                                <p className="text-tiny sm:text-base">
                                  truck /
                                </p>
                                <p className="text-tiny sm:text-base">month</p>
                              </div>
                            </div>
                          </div>
                          <p className="font-semibold mt-2 sm:mt-4 text-tiny sm:text-sm">
                            Total ${basicTotal.toFixed(2)} / month
                          </p>
                          <p className="text-gray-600 text-tiny sm:text-sm text-center mt-2 sm:mt-0">
                            Billed {isSelected ? "annually" : "monthly"} after
                            30 day trial
                          </p>
                          <Button
                            color="primary"
                            className="bg-[#0279ed] rounded-full w-36 mt-3 sm:mt-6 text-tiny sm:text-sm h-8 sm:h-unit-10"
                            onPress={selectBasic}
                          >
                            Try for free
                          </Button>
                        </div>
                      </div>
                      <div className="w-full sm:w-2/5 h-auto border rounded-md">
                        <div className="w-full h-4 rounded-t-md bg-blue-600"></div>
                        <div className="p-4 sm:p-8 w-full h-auto flex flex-col items-center sm:items-start">
                          <div className="flex flex-row sm:flex-col items-center justify-center sm:items-start sm:justify-start">
                            <p className="font-bold text-lg sm:text-xl sm:pb-1 mr-4 sm:mr-0">
                              Optimus +
                            </p>
                            <div className="flex flex-row items-center justify-center">
                              <p className="text-xl sm:text-4xl pr-2 sm:pr-4 font-light text-blue-600">
                                ${optimusplusPrice.toFixed(2)}
                              </p>
                              <div className="flex flex-col font-light">
                                <p className="text-tiny sm:text-base">
                                  truck /
                                </p>
                                <p className="text-tiny sm:text-base">month</p>
                              </div>
                            </div>
                          </div>
                          <p className="font-semibold mt-2 sm:mt-4 text-tiny sm:text-sm">
                            Total ${optimusplusTotal.toFixed(2)} / month
                          </p>
                          <p className="text-gray-600 text-tiny sm:text-sm text-center mt-2 sm:mt-0">
                            Billed {isSelected ? "annually" : "monthly"}
                          </p>
                          <Button
                            color="primary"
                            className="bg-[#0279ed] rounded-full w-36 mt-3 sm:mt-6 text-tiny sm:text-sm h-8 sm:h-unit-10"
                            onPress={selectOptimus}
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 4: Payment Details */}
                {step === 4 && (
                  <>
                    <p className="!mt-0 font-thin text-2xl sm:text-3xl font-sans">
                      One Last Step.
                    </p>
                    <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2"></div>
                    <div className="flex flex-col sm:flex-row w-full sm:space-x-4 space-y-4 sm:space-y-0 !mt-2 sm:!mt-10">
                      <div className="w-full sm:w-1/2">
                        <div className="w-full p-1">
                          <Input
                            label="Card Number"
                            placeholder="4646 4646 4646 4646"
                            variant="bordered"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19} // 16 digits + 3 spaces
                            className="h-unit-12 sm:h-14"
                          />
                        </div>
                        <div className="w-full flex">
                          <div className="w-1/2 p-1">
                            <Input
                              label="Expiration"
                              placeholder="MM / YY"
                              variant="bordered"
                              className="h-unit-12 sm:h-14"
                            />
                          </div>
                          <div className="w-1/2 p-1">
                            <Input
                              label="Security Code"
                              placeholder="CVC"
                              variant="bordered"
                              className="h-unit-12 sm:h-14"
                            />
                          </div>
                        </div>
                        <div className="w-full p-1">
                          <Input
                            label="Cardholder Name"
                            placeholder="Enter your full name"
                            variant="bordered"
                            className="h-unit-12 sm:h-14"
                          />
                        </div>
                        <div className="w-full flex">
                          <div className="w-1/2 p-1">
                            <Input
                              label="Company Name"
                              placeholder="Enter company name"
                              variant="bordered"
                              className="h-unit-12 sm:h-14"
                            />
                          </div>
                          <div className="w-1/2 p-1">
                            <Input
                              label="Postal Code"
                              placeholder="33136"
                              variant="bordered"
                              className="h-unit-12 sm:h-14"
                            />
                          </div>
                        </div>
                        <div className="w-full p-1 sm:mt-2">
                          <Input
                            // label="Coupon Code"
                            placeholder="Enter Coupon Code"
                            variant="bordered"
                            className="h-unit-12 sm:h-14"
                          />
                        </div>
                      </div>
                      <div className="w-full sm:w-1/2 p-2 flex flex-col">
                        <Image
                          src={"/LogoOptimusBlue.png"}
                          width={3000}
                          height={700}
                          className="px-6 mb-[68px] hidden sm:block"
                        />
                        <div className="w-full flex justify-between sm:pl-2">
                          {selectedPlan == "Basic" && isSelected && (
                            <>
                              <p className="text-sm">
                                Basic plan - {fleet} trucks
                              </p>
                              <p className="text-sm">
                                <span className="text-tiny">
                                  ({basicPrice * fleet} x 12 months)
                                </span>{" "}
                                ${basicTotal * 12}
                              </p>
                            </>
                          )}
                          {selectedPlan == "Basic" && !isSelected && (
                            <>
                              <p className="text-tiny sm:text-sm">
                                Basic plan - {fleet} trucks
                              </p>
                              <p className="text-tiny sm:text-sm">
                                ${basicTotal}
                              </p>
                            </>
                          )}
                          {selectedPlan == "Optimus+" && isSelected && (
                            <>
                              <p className="text-tiny sm:text-sm">
                                Optimus+ plan - {fleet} trucks
                              </p>
                              <p className="text-tiny sm:text-sm">
                                <span className="text-tiny">
                                  ({optimusplusPrice * fleet} x 12 months)
                                </span>{" "}
                                ${optimusplusTotal * 12}
                              </p>
                            </>
                          )}
                          {selectedPlan == "Optimus+" && !isSelected && (
                            <>
                              <p className="text-tiny sm:text-sm">
                                Optimus+ plan - {fleet} trucks
                              </p>
                              <p className="text-tiny sm:text-sm">
                                ${optimusplusTotal}
                              </p>
                            </>
                          )}
                        </div>
                        {isSelected && (
                          <>
                            <div className="w-full flex justify-between pl-2">
                              <p className="text-xs text-default-500">
                                Yearly plan 18% savings
                              </p>
                              {selectedPlan == "Basic" && (
                                <>
                                  <p className="text-xs text-default-500 line-through">
                                    ${basicPriceOriginal * fleet * 12}
                                  </p>
                                </>
                              )}
                              {selectedPlan == "Optimus+" && (
                                <>
                                  <p className="text-xs text-default-500 line-through">
                                    ${optimusplusPriceOriginal * fleet * 12}
                                  </p>
                                </>
                              )}
                            </div>
                          </>
                        )}
                        <div className="w-full flex justify-between sm:pl-2 sm:mt-10 mt-2">
                          <p className="text-sm font-semibold text-default-foreground">
                            Total
                          </p>
                          <p className="text-sm font-semibold text-default-foreground">
                            {selectedPlan == "Basic" && isSelected && (
                              <>${basicTotal * 12}</>
                            )}
                            {selectedPlan == "Optimus+" && isSelected && (
                              <>${optimusplusTotal * 12}</>
                            )}
                            {selectedPlan == "Basic" && !isSelected && (
                              <>${basicTotal}</>
                            )}
                            {selectedPlan == "Optimus+" && !isSelected && (
                              <>${optimusplusTotal}</>
                            )}
                          </p>
                        </div>
                        <div className="w-full bg-default-400 h-[1px] sm:ml-2 mt-3"></div>
                        {selectedPlan == "Basic" && (
                          <p className="pl-2 text-tiny sm:text-sm text-default-foreground sm:mt-2 mt-1">
                            *billed {isSelected ? "annually" : "monthly"} after trial period
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {/* Step 5: Payment Details */}
                {step === 5 && (
                  <div className="p-2 h-full flex flex-col items-center justify-center">
                    <p className="mt-4 font-thin text-2xl sm:text-3xl font-sans">
                      You&apos;re all Set!
                    </p>
                    <div className="bg-blue-400 w-20 h-1 rounded-xl !mt-4 !mb-2"></div>
                    <p className="text-sm text-default-foreground mt-10">
                      Congratulations! Your registration is complete.
                    </p>
                    <p className="text-sm text-default-foreground mb-10">
                      You will be redirected to the dashboard shortly.
                    </p>
                    <div className="!mt-24">
                      <Spinner
                        size="lg"
                        classNames={{ wrapper: "w-24 h-24" }}
                      />
                    </div>
                    {/* Redirect to the dashboard after a delay */}
                    <RedirectToDashboard />
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-center">
                {/* Common Buttons and Progress Bar */}
                {step <= 4 && (
                  <>
                    {step != 3 && (
                      <Button
                        onClick={handleNextStep}
                        auto
                        color="primary"
                        isDisabled={
                          (step === 2 && !verified) || !validateStep1()
                        }
                      >
                        Continue
                      </Button>
                    )}
                    <Progress
                      size="sm"
                      value={value}
                      color="primary"
                      className="mt-4"
                    />
                  </>
                )}
              </div>
            </div>
            <div className="lg:w-2/5 hidden lg:block">
              <Image
                src={"/truck.webp"}
                width={1000}
                height={1500}
                className="w-full hue-rotate-15 saturate-200 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RedirectToDashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard after 3 seconds (adjust as needed)
    const delay = setTimeout(() => {
      router.push("/");
    }, 3500);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(delay);
  }, [router]);

  return null; // This component doesn't render anything
};

export default Page;
