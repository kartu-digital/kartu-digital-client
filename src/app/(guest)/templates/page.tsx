//Russel========================================================================================
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HoveredImage from '@/components/HoveredImage';

export default function Templates() {
  const [activeCat, setActiveCat] = useState<string | null>('Undangan Digital');
  const [activeSubCat, setActiveSubCat] = useState<string | null>('All');

  const handleButtonClick = (buttonName: string) => {
    setActiveCat(buttonName);
    setActiveSubCat(activeCat === buttonName ? activeSubCat : 'All');
  };

  const handleSecondClick = (buttonName: string) => {
    setActiveSubCat(buttonName);
  };

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="categoriesContainer mb-7 mt-24 flex flex-wrap justify-between gap-8 lg:mt-0">
          <div className="mainCategory flex flex-wrap gap-6">
            <Button
              variant={'template'}
              size={'desktop_nav'}
              isActive={activeCat === 'Undangan Digital'}
              onClick={() => handleButtonClick('Undangan Digital')}
            >
              <p>Undangan Digital</p>
            </Button>
            <Button
              variant={'template'}
              size={'desktop_nav'}
              isActive={activeCat === 'Kartu Digital'}
              onClick={() => handleButtonClick('Kartu Digital')}
            >
              <p>Kartu Digital</p>
            </Button>
            <Button
              variant={'template'}
              size={'desktop_nav'}
              isActive={activeCat === 'Link in Bio'}
              onClick={() => handleButtonClick('Link in Bio')}
            >
              <p>Link in Bio</p>
            </Button>
            <Button
              variant={'template'}
              size={'desktop_nav'}
              isActive={activeCat === 'One Page'}
              onClick={() => handleButtonClick('One Page')}
            >
              <p>One Page</p>
            </Button>
          </div>

          <div className="subCategoryContainer flex items-center">
            {/* Conditional rendering based on activeButton */}
            {activeCat === 'Undangan Digital' && (
              <div className="subCats flex flex-wrap">
                <Button
                  className={activeSubCat === 'All' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('All')}
                >
                  All
                </Button>
                <Button
                  className={activeSubCat === 'Pernikahan' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Pernikahan')}
                >
                  Pernikahan
                </Button>
                <Button
                  className={activeSubCat === 'Ulang Tahun' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Ulang Tahun')}
                >
                  Ulang Tahun
                </Button>
                <Button
                  className={activeSubCat === 'Khitan' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Khitan')}
                >
                  Khitan
                </Button>
                <Button
                  className={activeSubCat === 'Seminar' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Seminar')}
                >
                  Seminar
                </Button>
              </div>
            )}
            {activeCat === 'Kartu Digital' && (
              <div className="subCats flex flex-wrap">
                <Button
                  className={activeSubCat === 'All' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('All')}
                >
                  All
                </Button>
                <Button
                  className={
                    activeSubCat === 'Personal Card' ? 'font-bold' : ''
                  }
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Personal Card')}
                >
                  Personal Card
                </Button>
                <Button
                  className={
                    activeSubCat === 'Business Card' ? 'font-bold' : ''
                  }
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Business Card')}
                >
                  Business Card
                </Button>
              </div>
            )}
            {activeCat === 'Link in Bio' && (
              <div className="subCats flex flex-wrap">
                <Button
                  className={activeSubCat === 'All' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('All')}
                >
                  All
                </Button>
                <Button
                  className={activeSubCat === 'Social Media' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Social Media')}
                >
                  Social Media
                </Button>
                <Button
                  className={
                    activeSubCat === 'Small Business' ? 'font-bold' : ''
                  }
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Small Business')}
                >
                  Small Business
                </Button>
                <Button
                  className={activeSubCat === 'Influencer' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Influencer')}
                >
                  Influencer
                </Button>
              </div>
            )}
            {activeCat === 'One Page' && (
              <div className="subCats flex flex-wrap">
                <Button
                  className={activeSubCat === 'All' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('All')}
                >
                  All
                </Button>
                <Button
                  className={activeSubCat === 'Profile' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Profile')}
                >
                  Profile
                </Button>
                <Button
                  className={activeSubCat === 'Landing' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Landing')}
                >
                  Landing
                </Button>
                <Button
                  className={activeSubCat === 'Form' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Form')}
                >
                  Form
                </Button>
                <Button
                  className={activeSubCat === 'Portofolio' ? 'font-bold' : ''}
                  variant={'ghost'}
                  size={'sub_category'}
                  onClick={() => handleSecondClick('Portofolio')}
                >
                  Portofolio
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* <div className="cardContainer flex flex-wrap gap-5 sm:gap-7 lg:gap-2 my-8 border-4 border-green-400" > */}
        <div className="cardContainer my-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-2">
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
          <HoveredImage />
        </div>
      </div>
    </>
  );
}

// interface ToggledImageFilterProps {
//     activeButton: string | null;
//     activeSecond: string | null;
// }

// const ToggledImageFilter: React.FC<ToggledImageFilterProps> = ({ activeButton, activeSecond }) => {
//     // Filtered ToggledImage components based on activeButton
//     const filteredToggledImages = [
//         { firstCat: "Undangan Digital", secondcat: "Pernikahan" },
//         { firstCat: "One-Page", secondcat: "Form" },
//         { firstCat: "Link in Bio", secondcat: "Social Media" },
//         { firstCat: "Kartu Digital", secondcat: "Personal Card" },
//         { firstCat: "One-Page", secondcat: "Profile" },
//         { firstCat: "Undangan Digital", secondcat: "Ulang Tahun" },
//         { firstCat: "Kartu Digital", secondcat: "Business Card" },
//         { firstCat: "Link in Bio", secondcat: "Small Business" },
//         { firstCat: "Link in Bio", secondcat: "Influencer" }
//     ];

//     return filteredToggledImages.map((image, index) => {
//         // Check if the image matches the activeButton
//         if (image.firstCat === activeButton) {
//             // If activeSecond is not 'All', also check if the image matches the activeSecond
//             if (activeSecond !== 'All' && image.secondcat !== activeSecond) {
//                 return null; // Skip rendering this image
//             }
//             // Render the image if it matches the criteria
//             return <ToggledImage key={index} firstCat={image.firstCat} secondcat={image.secondcat} />;
//         }
//         return null; // Skip rendering if the image doesn't match activeButton
//     });
// };

//========================================================================================
