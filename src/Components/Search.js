import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

const Search = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [clickedField, setClickedField] = useState("");

    const handleFieldClick = (fieldName) => {
        setClickedField(fieldName);
        // console.log("clickedField: ", clickedField);
    };

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    const getFieldClass = (fieldName) => {
        let baseClass = "flex flex-col rounded-3xl lg:rounded-full px-7 py-3 mx-1 cursor-pointer transition-all duration-500";
        if (clickedField === fieldName) {
            baseClass += " scale-x-105 lg:scale-y-105 bg-white shadow-2xl"
        }
        else {
            baseClass += " bg-gray-100";
        }
        return baseClass;
    };

    return (
        <div className="p-5 flex justify-center items-center w-fit">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-10 flex flex-col justify-between items-center bg-gray-100 w-full border rounded-3xl lg:rounded-full md:flex-row md:items-center"
            >
                <div
                    className={getFieldClass("source")}
                    onClick={() => handleFieldClick("source")}
                    onFocus={() => handleFieldClick("source")}
                >
                    <label htmlFor="source" className="font-semibold">Source</label>
                    <input
                        {...register("source", { required: true })}
                        id="source"
                        className="bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search source"
                    />
                    {errors.source && (
                        <span className="text-red-600 text-sm">Required</span>
                    )}
                </div>
                <div
                    className={getFieldClass("destination")}
                    onClick={() => handleFieldClick("destination")}
                    onFocus={() => handleFieldClick("destination")}
                >
                    <label htmlFor="destination" className="font-semibold">Destination</label>
                    <input
                        {...register("destination", { required: true })}
                        id="destination"
                        className="bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search destinations"
                    />
                    {errors.destination && (
                        <span className="text-red-600 text-sm">Required</span>
                    )}
                </div>
                <div
                    className={getFieldClass("weight")}
                    onClick={() => handleFieldClick("weight")}
                    onFocus={() => handleFieldClick("weight")}
                >
                    <label htmlFor="Weight" className="font-semibold">Weight</label>
                    <input
                        {...register("weight", { required: true, pattern: /[0-9]/ })}
                        id="Weight"
                        className="bg-transparent text-sm outline-none rounded-full py-2 text-black"
                        placeholder="Search weight"
                    />
                    {errors.weight && (
                        <span className="text-red-600 text-sm">Required (only numbers)</span>
                    )}
                </div>
                <div className="flex justify-center items-center py-4 px-4 m-4 bg-rose-600 hover:bg-rose-700 rounded-full shadow-lg text-white cursor-pointer w-full md:w-auto">
                    <IoSearch />
                    <button type="submit" className="pl-4 pr-14">Search</button>
                </div>
            </form>
        </div>
    );
}

export default Search;