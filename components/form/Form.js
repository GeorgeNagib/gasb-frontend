import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const EmailInput = () => {
  const initialValue = {
    email: '',
  };
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex">
        <div>
          <Field
            type="email"
            name="email"
            className="text-white outline-0 border-2 bg-transparent placeholder:uppercase placeholder:text-white py-4 px-6"
            placeholder="you email to notify you on launch"
          />
        </div>
        <button className="bg-white text-[rgba(13, 16, 57, 1)] p-4 font-bold uppercase">
          Notify Me
        </button>
      </Form>
    </Formik>
  );
};

export default EmailInput;
