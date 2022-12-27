import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../../styles/Home.module.css';

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
      <Form className="flex flex-wrap ">
        <div className={`lg:basis-[69%] basis-full ${styles.formControl}`}>
          <Field
            type="email"
            name="email"
            className={`text-white md:text-base text-sm w-full  outline-0 border-2 bg-transparent placeholder:uppercase placeholder:text-white py-4 px-6 ${styles.form}`}
            placeholder="your email to notify you on launch"
          />
        </div>
        <button
          className={`bg-white text-[rgba(13, 16, 57, 1)] p-4 lg:text-base text-sm font-bold uppercase w-full lg:w-auto ${styles.button}`}
        >
          Notify Me
        </button>
      </Form>
    </Formik>
  );
};

export default EmailInput;
