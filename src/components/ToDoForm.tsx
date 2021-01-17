import React, {
  //useState,
  useRef,
} from "react";

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  //  const [title, setTitle] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  //  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //    setTitle(event.target.value);
  //  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      //  console.log(ref.current!.value);
      ref.current!.value = "";

      //console.log(title);
      //  setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        //onChange={changeHandler}
        //value={title}
        type="text"
        id="title"
        placeholder="Enter task name"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter task name
      </label>
    </div>
  );
};
