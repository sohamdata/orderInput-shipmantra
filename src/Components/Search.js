import { useForm } from "react-hook-form";

const Search = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="p-52 flex justify-center items-center w-fit">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-5 flex flex-row justify-between items-center bg-gray-100 w-full border rounded-full"
            >
                <div>
                    <label htmlFor="source">Source</label>
                    <input
                        {...register("source", { required: true })}
                        id="source"
                        className="px-2 bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search source"
                    />
                    {errors.source && (
                        <span className="text-red-600 text-sm">Required</span>
                    )}
                </div>
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input
                        {...register("destination", { required: true })}
                        id="destination"
                        className="px-2 bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search destinations"
                    />
                    {errors.destination && (
                        <span className="text-red-600 text-sm">Required</span>
                    )}
                </div>
                <div>
                    <label htmlFor="Weight">Weight</label>
                    <input
                        {...register("weight", { required: true, pattern: /[0-9]/ })}
                        id="Weight"
                        className="px-2 bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search weight"
                    />
                    {errors.weight && (
                        <span className="text-red-600 text-sm">
                            Required
                        </span>
                    )}
                </div>
                <div className="py-2 px-4 bg-rose-600 hover:bg-rose-700 rounded-full text-white cursor-pointer w-24">
                    <button type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Search;