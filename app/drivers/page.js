"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Switch,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import Shell from "../components/Shell";
import CalendarHeatmap from "../components/CalendarHeatmap";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const Page = () => {
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "id":
        return <p>{cellValue}</p>;
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            <p className="text-xs">{cellValue}</p>
          </Chip>
          //   <Switch defaultSelected size="sm" className="h-1" />
        );
      case "expired":
        return (
          <div className="flex items-center">
            <div
              className={`h-2 w-2 mr-2 rounded-full ${
                cellValue ? "bg-red-500" : "bg-green-500"
              }`}
            ></div>
            <p
              className={`text-xs ${
                cellValue ? "text-red-500" : "text-default-600"
              }`}
            >
              {cellValue ? "Expired" : "Compliant"}
            </p>
            {cellValue}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details" className="text-default-900">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user" className="text-default-900">
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
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Shell>
      <div className="flex flex-col pt-10 w-[98%] mx-auto text-black">
        <p className="text-tiny text-default-500 font-light mb-2">
          Database &nbsp;&gt;&nbsp; Drivers
        </p>
        <p className="text-blue-950 font-bold text-lg mb-3">Drivers</p>
        <Table
          aria-label="Example table with custom cells"
          isHeaderSticky
          classNames={{
            base: "max-h-[755px]",
            table: "min-h-[420px]",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <CalendarHeatmap />
    </Shell>
  );
};

export default Page;
