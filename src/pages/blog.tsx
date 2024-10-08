import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaPalette,
  FaCog,
  FaEllipsisH,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    category: "Fertility and Menstrual Health Tracking",
    title: "My menstrual flow not heavy anymore, why?",
    description:
      "Experiencing lighter-than-usual menstrual bleeding can be caused by various factors...",
    image: "",
  },
  {
    id: 2,
    category: "Fertility and Menstrual Health Tracking",
    title: "Fertility rate unstable",
    description:
      "Hormones like estrogen, progesterone, and thyroid hormones play a crucial role in...",
    image: "",
  },
  {
    id: 3,
    category: "Breast Health Monitoring",
    title: "Manual breast examinations",
    description:
      "The frequency of this could be monthly, typically a few days after your period...",
    image: "",
  },
  {
    id: 4,
    category: "Breast Health Monitoring",
    title: "Explore mammogram",
    description:
      "X-ray imaging technique specifically designed to examine breast tissue...",
    image: "",
  },
  {
    id: 5,
    category: "Holistic Wellness Coaching",
    title: "Holistic and wellness coaching",
    description:
      "Personalized approach to health and well-being that considers the whole person...",
    image: "",
  },
];

const MastitisNote = () => (
  <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
    <h3 className="text-md font-bold text-blue-600 mb-2">Mastitis</h3>
    <p>Hi loves 💗 It's your health companion here 🧘‍♀️</p>
    <p>
      Mastitis is simply put, a painful infection of the breast tissues. Some
      causes of mastitis include blocked milk ducts in the breasts, cracked/sore
      breasts, latch problems, or bacteria gaining entry into the breast.
    </p>
    <p>Some signs you may have mastitis include:</p>
    <ul className="list-disc list-inside ml-4">
      <li>Skin redness</li>
      <li>Swelling</li>
      <li>Thickening of breast tissue</li>
      <li>Tenderness/warmth</li>
      <li>Pain</li>
    </ul>
    <p>
      In case you see any of these signs, check in with a healthcare
      professional while doing the following:
    </p>
    <ul className="list-disc list-inside ml-4">
      <li>Eat healthy meals containing vitamin C</li>
      <li>Apply cold compress to the affected breast</li>
      <li>Massage the breast lightly from the affected area to the nipple</li>
      <li>Rest as much as possible 🤗</li>
    </ul>
    <p>
      There you have it, a quick rundown on mastitis. Byeee 🧘‍♀️💗
    </p>
  </div>
);

const BreastCancerNote = () => (
  <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
    <h3 className="text-md font-bold text-blue-600 mb-2">Breast Cancer</h3>
    <p>Hi loves 🧘‍♀️💗 It's your health companion here to give you a rundown on breast cancer.</p>
    <p>Are you with me, loves?</p>
    <p>
      Breast cancer is an abnormal growth of breast cells which form tumors. Unfortunately, the exact cause of breast cancer is not known 😔, but it is thought to be caused by a combination of risk factors that include, but are not limited to, genetics, hormones, obesity, radiation exposure, smoking, lifestyle choices, and environmental triggers.
    </p>
    <p>Symptoms of breast cancer are:</p>
    <ul className="list-disc list-inside ml-4">
      <li>Irritation/dimpling of the breast skin.</li>
      <li>New lump in the breast/underarm.</li>
      <li>Pulling in of the nipple/pain in the nipple.</li>
      <li>Thickening/swelling of part of the breast.</li>
      <li>Nipple discharge that is not milk.</li>
      <li>Redness/flaky skin of the nipple.</li>
      <li>Pain in the nipple.</li>
    </ul>
    <p>
      It is important to keep in mind, loves 💗, that these symptoms are not exclusive to breast cancer 🎀.
    </p>
    <p>
      If you notice any of these signs, please consult with a healthcare professional as soon as possible!
    </p>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const navigateToComingSoon = () => {
    navigate("/herwaree/ComingSoon");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-500 text-white p-4 text-center text-xl font-semibold">
        Blogs
      </header>

      <div className="p-4 pb-24">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="mb-6 bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={navigateToComingSoon}
          >
            <h3 className="text-md font-bold text-purple-600 mb-2">
              {blog.category}
            </h3>
            <div className="flex items-start space-x-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              </div>
            </div>
          </div>
        ))}

        <MastitisNote />
        <BreastCancerNote /> {/* Add the BreastCancerNote component here */}
      </div>

      <footer className="bg-white shadow-md py-4 fixed bottom-0 inset-x-0 flex justify-around border-t border-purple-200">
        <Link
          to="/herwaree/calendar"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          to="/history"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaHistory className="text-2xl" />
          <span className="text-sm">History</span>
        </Link>
        <Link
          to="/theme"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaPalette className="text-2xl" />
          <span className="text-sm">Theme</span>
        </Link>
        <Link
          to="/herwaree/settings"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaCog className="text-2xl" />
          <span className="text-sm">Settings</span>
        </Link>
        <Link
          to="/herwaree/more"
          className="flex flex-col items-center text-gray-600 group-hover:text-purple-600"
        >
          <FaEllipsisH className="text-2xl" />
          <span className="text-sm">More</span>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
