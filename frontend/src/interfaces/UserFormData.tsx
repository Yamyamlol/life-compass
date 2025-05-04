// src/interfaces/UserFormData.ts
export default interface UserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type UserFormField = keyof UserFormData;