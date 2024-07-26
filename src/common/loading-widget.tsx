import { CgSpinner } from "react-icons/cg";
interface WidgetProperties {
  message: string;
}

const Widget = ({ message }: WidgetProperties) => {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <CgSpinner className="mb-2 animate-spin text-2xl" />
      <p>{message}</p>
    </section>
  );
};

export default Widget;
