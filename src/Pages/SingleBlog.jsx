import { useParams, Link } from 'react-router-dom';
import blogsData from '../Components/BlogsData';

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogsData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Blog Not Found</h1>
          <p className="mt-3 text-xl text-gray-500">
            The blog post you're looking for doesn't exist.
          </p>
          <Link 
            to="/blogs" 
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section with Blog Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img 
            className="h-full w-full object-cover" 
            src={blog.image} 
            alt={blog.title} 
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{blog.title}</h1>
            <div className="mt-6 flex justify-center items-center text-xl text-gray-300">
              <span>{blog.date}</span>
              <span className="mx-4">•</span>
              <span>By {blog.author}</span>
              <span className="mx-4">•</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">{blog.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-red mx-auto">
            <p className="text-lg text-gray-500 italic">{blog.excerpt}</p>
            <div className="mt-8 text-gray-700">
              {blog.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  className="h-12 w-12 rounded-full" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt={blog.author} 
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{blog.author}</h3>
                <p className="text-sm text-gray-500">Fitness Expert</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-red-600 hover:text-red-800"
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;