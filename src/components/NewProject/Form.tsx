import { forwardRef, useRef, type FormEvent, type ComponentPropsWithoutRef, useImperativeHandle } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form({ onSave, children, ...otherProps }, ref) {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()); // Fix applied here
        onSave(data);
        form.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    );
})

export default Form;
