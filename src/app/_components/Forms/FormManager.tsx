"use client";

import React, { useState } from "react";
import FormCreate from "./FormCreate";
import FormUpdate from "./FormUpdate";
import FormDelete from "./FormDelete";

interface FormManagerProps {
  children: React.ReactNode;
  apiCreate: (data: Record<string, any>) => void;
  apiUpdate: (data: Record<string, any>) => void;
  apiDelete: (data: Record<string, any>) => void;
  options?: {
    buttons?: {
      createTitle?: string;
      updateTitle?: string;
      deleteTitle?: string;
    };
    showCreate?: boolean;
    showUpdate?: boolean;
    showDelete?: boolean;
  };
}

function FormManager(props: FormManagerProps) {
  return (
    <>
      <FormCreate
        buttonTitle={props.options?.buttons?.createTitle}
        apiCreate={props.apiCreate}
      >
        {props.children}
      </FormCreate>
      <FormUpdate
        buttonTitle={props.options?.buttons?.createTitle}
        apiUpdate={props.apiUpdate}
      >
        {props.children}
      </FormUpdate>
      <FormDelete apiDelete={props.apiDelete}></FormDelete>
    </>
  );
}

export default FormManager;
