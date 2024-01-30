import { useState } from "react";
import InfoBanner from "../components/InfoBanner";
const DesignedForSailors = () => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = e.target.checkValidity();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const validationMessages = Array.from(formData.keys()).reduce(
      (acc, key) => {
        acc[key] = form.elements[key].validationMessage;
        return acc;
      },
      {}
    );
    if (isValid) {
      // here you do what you need to do if is valid
      const data = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
      }, {});
      console.log(data);
      try {
        const response = await fetch("/contact", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error(`Invalid response: ${response.status}`);
        }
        alert("Thanks for contacting us, we will get back to you soon!");
      } catch (err) {
        console.error(err);
        alert("We can't submit the form, try again later?");
      }
    } else {
      setErrors(validationMessages);
    }
  };
  return (
    <div key="1" className="flex flex-col min-h-[100vh] align-center">
      <main className="flex-1">
        <section className="w-full flex justify-center">
          <div>
            <img
              height="265"
              width="420"
              src="/images/logos/cdi_logo.png"
              alt="CDI Logo"
            />
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32 xl:pb-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  A <span className="underline font-black">Must-Have</span> for
                  a Smooth Sailing Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Not All Sailboats Come With A Furling System</li>
                    <small className="text-gray-500 text-sm">
                      {" "}
                      In many cases, older sailboats are not equipped with a
                      furling system for either their headsail, mainsail, or
                      both, from manufacturing. This creates a tedious and
                      lengthy process of setting up and taking down your sails
                      frequently.
                    </small>
                    <li>If Your Boat Was Manufactured With A Furling System</li>
                    <small className="text-gray-500 text-sm">
                      That’s great! The downside of the furling systems used
                      from factory is that they are typically greatly out-dated
                      and possibly worn-out. This results in a process that
                      becomes a hassle while sailing due to it being clunky and
                      prone to jamming.
                    </small>
                    <li>Get More Time On The Water</li>
                    <small className="text-gray-500 text-sm">
                      Unfortunately, in both of these scenarios, a lot of
                      sailors are finding that the hassle is taking some of the
                      enjoyment out of sailing and limiting the amount of time
                      that they spend on the water.
                    </small>
                  </ol>
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#145DA0] px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  href="/designed-for-sailors#find-your-furler"
                >
                  Get Started
                </a>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover object-center mt-8"
              height="600"
              src="/designedForSailors/Inspecting-your-furler-calico-skies-edited.png"
              width="1200"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/CDI-FlexibleFurler-FF2.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Time Consuming.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    If your sailboat does not have a furling system, or an
                    outdated one, the time spent dealing with your sails during
                    setup and take-down, or during changing wind conditions is
                    exponentially longer that you would with a furling system.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 text-gray-50 bg-[#145DA0] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/designed-for-sailors#find-your-furler"
                  >
                    Find your Furler
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/products"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Safety Concerns.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    During wet and windy conditions, going forward on your boat
                    can be very dangerous to your crew, no matter the
                    experience. When you are equipped with furling systems, the
                    furler can be used to both furl and reef your sail in any
                    wind condition, from the safety of the cabin. This makes it
                    a safer and more convenient option for sailors.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/designed-for-sailors#find-your-furler"
                  >
                    Find your Furler
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/products"
                  >
                    Shop
                  </a>
                </div>
              </div>
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/sailing-uma-rough-waters-wide-1024x546.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/headsail.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    There Is A Furler For You!
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    CDI Furlers are suitable for use on daysailers, weekend
                    warriors, and live-aboard cruisers. The flexible luff
                    extrusion makes it the best choice for trailerables. This
                    makes it a versatile furling system that can be used on
                    different types of boats.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/designed-for-sailors#find-your-furler"
                  >
                    Find your Furler
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/products"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
                    {/* Collaboration */}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Your Source For Parts And Hardware.
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Furlers get used heavily and experience severe weather which
                    means they occasionally require maintenance and possibly
                    even a replacement part. We make sure to carry any parts or
                    hardware you will need to get your CDI furler back to its
                    former glory!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/designed-for-sailors#find-your-furler"
                  >
                    Find your Furler
                  </a>
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                    href="/products/product-category/parts"
                  >
                    Parts
                  </a>
                </div>
              </div>
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/designedForSailors/CDI-MR2-Parts.jpg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
          id="find-your-furler"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready To Sail With CDI?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                  Have any questions or concerns? Feel free to reach out.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <input
                    className="w-full"
                    placeholder="Your Name"
                    type="text"
                    name="name"
                  />
                  <input
                    className="w-full"
                    placeholder="Your Email"
                    type="email"
                    name="email"
                  />
                  <input
                    className="w-full"
                    placeholder="Your Phone"
                    type="tel"
                    name="phone"
                  />
                  <input
                    className="w-full"
                    placeholder="Boat Model/Make"
                    type="text"
                    name="boat"
                  />
                  <input
                    className="w-full"
                    placeholder="Furler Selection – UNSURE"
                    type="text"
                    name="furler"
                  />

                  <input
                    className="w-full h-32 p-2  "
                    placeholder="Additional Notes"
                    type="text"
                    name="message"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-gray-50 bg-[#145DA0] shadow transition-colors hover:bg-[#B1D4E0] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                  >
                    Submit
                  </button>
                </form>
              </div>
              <InfoBanner
                column1={"Mon-Fri: 8:00am to 4:00pm PST"}
                column2={"1-(888)-880-6813"}
                column3={"info@cdifurlers.com"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DesignedForSailors;
