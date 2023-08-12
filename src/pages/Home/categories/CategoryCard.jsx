import './categoriesStyle.css'
const CategoryCard = ({data}) => {
    return (
        <div className="customShadow">
            <div className="border-2 border-indigo-600 h-48 w-64 rounded-lg border-dashed">
                <img className="w-40 m-auto" src={data.photo} alt="" />
                <p className="text-center text-blue-400 font-semibold">{data.name}</p>
            </div>
        </div>
    );
};

export default CategoryCard;