import { useForm } from "react-hook-form";
import axios from 'axios';

const CreateNewProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHandler = async ({ title, description, discountedPrice, originalPrice, imageUrl }) => {
    try {
      const res = await axios.post('http://localhost:3000/create-product', {
        title,
        description,
        discountedPrice,
        originalPrice,
        imageUrl
      })
      console.log(res.data);

      if (res.status === 201) {
        alert('Product is created successfully')
      }
    } catch (e) {
      alert('Something is Wrong!')
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl my-5">Create New Product</h1>
      <form
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="mb-4">
          <label className="block text-xl font-semibold leading-6">Title</label>
          <input type="text" id="title" className="block w-96 px-3 border border-zinc-500 focus:outline-none" {...register('title', { required: true })} />
          {errors.title && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold leading-6">Description</label>
          <input type="text" id="description" className="block w-96 px-3 border border-zinc-500 focus:outline-none" {...register('description', { required: true })} />
          {errors.description && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold leading-6">Discounted Price</label>
          <input type="number" id="discountedPrice" className="block w-96 px-3 border border-zinc-500 focus:outline-none" {...register('discountedPrice', { required: true })} />
          {errors.discountedPrice && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold leading-6">Original Price</label>
          <input type="number" id="originalPrice" className="block w-96 px-3 border border-zinc-500 focus:outline-none" {...register('originalPrice', { required: true })} />
          {errors.originalPrice && <span className="text-red-600">This field is required</span>}
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold leading-6">Product Image URL</label>
          <input type="text" id="imageUrl" className="block w-96 px-3 border border-zinc-500 focus:outline-none" {...register('imageUrl', { required: true })} />
          {errors.imageUrl && <span className="text-red-600">This field is required</span>}
        </div>

        <div>
          <button 
            type="submit"
            className="p-4 bg-amber-400 cursor-pointer"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewProduct