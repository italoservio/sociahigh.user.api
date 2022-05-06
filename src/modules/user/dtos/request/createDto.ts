import * as yup from 'yup';

export type createDto = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  password: string;
  profilePicture?: any;
};

export const createDtoSchema: yup.SchemaOf<createDto> = yup.object().shape({
  firstName: yup
    .string()
    .required(),
  lastName: yup
    .string()
    .required(),
  birthDate: yup
    .date()
    .required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .min(8)
    .required(),
  profilePicture: yup
    .mixed()
});
