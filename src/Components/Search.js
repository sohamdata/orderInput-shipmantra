import { useForm } from 'react-hook-form';

const SearchForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Source</label>
                <input
                    type="text"
                    id="source"
                    className={`form-control ${errors.source ? 'is-invalid' : ''}`}
                    {...register('source', { required: true })}
                />
                {errors.source && (
                    <div className="invalid-feedback">Source is required</div>
                )}
            </div>

            <div className="form-group">
                <label>Destination</label>
                <input
                    type="text"
                    id="destination"
                    className={`form-control ${errors.destination ? 'is-invalid' : ''}`}
                    {...register('destination', { required: true })}
                />
                {errors.destination && (
                    <div className="invalid-feedback">Destination is required</div>
                )}
            </div>

            <div className="form-group">
                <label>Weight</label>
                <input
                    type="number"
                    id="weight"
                    className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                    {...register('weight', { required: true })}
                />
                {errors.weight && (
                    <div className="invalid-feedback">Weight is required</div>
                )}
            </div>

            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
};

export default SearchForm;