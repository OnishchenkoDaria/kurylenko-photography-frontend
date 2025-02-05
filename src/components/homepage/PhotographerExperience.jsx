/*import PropTypes from 'prop-types';*/
import '../../styles/PhotographerExperience.css';
import PathConstants from "../../routes/pathConstants.js";
import { Link } from "react-router-dom";

const PhotographerExperience = () => {
    return (
        <>
            <div className="bg-neutral-400 rounded p-4 sm:p-6 md:p-8 flex flex-col justify-center pb-6">
                <div className="mx-4 sm:mx-12 md:mx-36">
                    <div className="">
                        <h2 className="text-3xl sm:text-4xl text-white text-center font-mono mt-2">About me</h2>
                        <p className="text-lg sm:text-xl text-gray-700 leading-tight text-center mt-4">
                            Привіт, я - фотограф з Києва, що полюбляє художні фотосети та чия мета завжди була захопити
                            найцінніші моменти та перетворити їх на витвори мистецтва.
                        </p>
                        <p className="text-lg sm:text-xl text-gray-700 leading-tight text-center mt-2">
                            Моя робота - це не просто фотографії, а цілі історії та емоції, виражені через об&#39;єктив
                            моєї камери.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-2">
                        <div className="bg-neutral-100 rounded m-4 sm:m-6 w-full sm:w-64 pt-8 text-center">
                            <h2 className="font-mono text-3xl sm:text-5xl mb-2">50+</h2>
                            <p className="pb-4">
                                фотосесій та відеозйомок різних жанрів та формату
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded m-4 sm:m-6 w-full sm:w-64 pt-8 text-center">
                            <h2 className="font-mono text-3xl sm:text-5xl mb-2">Skills</h2>
                            <p className="pb-4">
                                Рівень навичок підтверджений сертифікатами профільних курсів
                            </p>
                        </div>
                        <div className="bg-neutral-100 rounded m-4 sm:m-6 w-full sm:w-64 pt-8 text-center">
                            <h2 className="font-mono text-3xl sm:text-5xl mb-2">Setup</h2>
                            <p className="pb-4">
                                Втілю ваші задуми та образи, підберу атмосферу і оточення
                            </p>
                        </div>
                    </div>
                </div>
                <button className="text-lg sm:text-2xl mt-4 mb-2">
                    <Link to={PathConstants.PAYMENT} className="text-decoration-none text-white outline rounded p-2">
                        Buy Photoshoot
                    </Link>
                </button>
            </div>
        </>
    );
};

export default PhotographerExperience;