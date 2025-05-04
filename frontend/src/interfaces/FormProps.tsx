export default interface FormProps {
  formType: "signin" | "signup";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

