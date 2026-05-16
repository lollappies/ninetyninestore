import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>
          Blog Fashion Wanita | Ninetynine
        </title>

        <meta
          name="description"
          content="Artikel fashion wanita terbaru, inspirasi outfit, trend, dan tips styling dari Ninetynine."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold">
          Blog Fashion Ninetynine
        </h1>

        <p className="mt-4 text-gray-500">
          Inspirasi fashion dan trend terbaru
        </p>

        <Link
          to="/blog/trend-fashion-wanita-2026"
          className="
          block
          mt-10
          border
          rounded-xl
          p-6
          hover:shadow-lg
          transition
          "
        >

          <p className="text-sm text-gray-500">
            Fashion Trend
          </p>

          <h2 className="text-2xl font-semibold mt-2">

            Trend Fashion Wanita 2026:
            Inspirasi Outfit Casual dan Elegan

          </h2>

          <p className="mt-4 text-gray-600">

            Temukan inspirasi dress,
            blouse, tunic, hingga outfit
            casual wanita terbaru.

          </p>

        </Link>

      </div>
    </>
  );
}

        <Link to="/blog/outfit-casual-wanita">

        <div className="border rounded-2xl p-8 mt-6 hover:shadow-xl transition">

        <p className="text-sm text-gray-400">

        Fashion Tips

        </p>

        <h2 className="text-3xl font-semibold mt-3">

        Inspirasi Outfit Casual Wanita
        untuk Hangout dan Kuliah

        </h2>

        <p className="text-gray-600 mt-4">

        Ide outfit casual wanita modern
        untuk hangout dan aktivitas sehari-hari.

        </p>

        </div>

        </Link>