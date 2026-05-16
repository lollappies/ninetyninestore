import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-6xl font-bold">
        Blog Fashion Ninetynine
      </h1>

      <p className="text-gray-500 mt-4">
        Inspirasi fashion dan trend terbaru
      </p>


      <div className="mt-14 space-y-8">

        <Link to="/blog/trend-fashion-wanita-2026">

          <div className="border rounded-2xl p-8 hover:shadow-xl transition cursor-pointer">

            <p className="text-sm text-gray-400 uppercase">
              Fashion Trend
            </p>

            <h2 className="text-3xl font-semibold mt-3">

              Trend Fashion Wanita 2026:
              Inspirasi Outfit Casual dan Elegan

            </h2>

            <p className="mt-4 text-gray-600">

              Temukan inspirasi dress,
              blouse, tunic hingga outfit
              casual wanita terbaru.

            </p>

          </div>

        </Link>



        <Link to="/blog/outfit-casual-wanita">

          <div className="border rounded-2xl p-8 hover:shadow-xl transition cursor-pointer">

            <p className="text-sm text-gray-400 uppercase">
              Outfit Inspiration
            </p>

            <h2 className="text-3xl font-semibold mt-3">

              Outfit Casual Wanita:
              Inspirasi Tampil Stylish Sehari-hari

            </h2>

            <p className="mt-4 text-gray-600">

              Inspirasi mix and match
              outfit casual wanita modern
              agar tampil nyaman dan elegan.

            </p>

          </div>

        </Link>


            <Link to="/blog/tips-mix-and-match-wanita">
            
            <div className="border rounded-2xl p-8 hover:shadow-xl transition cursor-pointer">

            <p className="text-sm text-gray-400 uppercase">
            Fashion Tips
            </p>

            <h2 className="text-3xl font-semibold mt-3">

            Tips Mix and Match Outfit Wanita
            Agar Tampil Stylish

            </h2>

            <p className="mt-4 text-gray-600">

            Inspirasi padu padan dress,
            tunic, blouse dan outfit wanita modern.

            </p>

            </div>

            </Link>

      </div>

    </div>
  );
}