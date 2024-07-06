import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CommonForm({
  action,
  buttonText,
  isBtnDisabled,
  btnType,
  formControl,
  formData,
  setFormData,
  handleFileChange,
}) {
  // component Types -----> Textarea | input | radio Input | Select
  console.log(formControl);
  function renderInputByComponentType(getCurrentControls) {
    let content = "null";

    switch (getCurrentControls.componentType) {
      case "input":
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type={"text"}
              disabled={getCurrentControls.disabled}
              placeholder={getCurrentControls.placeholder}
              name={getCurrentControls.name}
              id={getCurrentControls.name}
              value={formData[getCurrentControls.name]}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                });
              }}
              className="w-full h-[40px] px-4 border-0 border-b-2 bg-transparent text-base outline-none shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:shadow-none focus:border-0 focus:border-b-2 focus-visible:ring-0 focus:ring-0 focus:ring-offset-0"
            />
          </div>
        );

        break;

      case "file":
        content = (
          <Label
            for={getCurrentControls.name}
            className="flex gap-5 bg-gray-100 dark:bg-black items-center px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer"
          >
            <h2>{getCurrentControls.label}</h2>
            <Input
              onChange={handleFileChange}
              id={getCurrentControls.name}
              type="file"
            />
          </Label>
        );
        break;

      default:
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type={"text"}
              disabled={getCurrentControls.disabled}
              placeholder={getCurrentControls.placeholder}
              name={getCurrentControls.name}
              id={getCurrentControls.name}
              value={formData[getCurrentControls.name]}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                });
              }}
              className="w-full h-[40px] px-4 border-0 border-b-2 bg-transparent text-base outline-none shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:shadow-none focus:ring-0"
            />
          </div>
        );
        break;
    }
    return content;
  }

  return (
    <form action={action}>
      {formControl.map((control) => renderInputByComponentType(control))}
      <div className="mt-6 w-full">
        <Button
          disabled={isBtnDisabled}
          type={btnType || "submit"}
          className="disabled:opacity-65 h-11 flex justify-center items-center px-5"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

export default CommonForm;
