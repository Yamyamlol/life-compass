export default interface FormContextType {
  formData: FormData;
  updateForm: (field: keyof FormData, value: string) => void;
}
