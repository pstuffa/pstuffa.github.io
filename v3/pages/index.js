import Link from "next/link";

const App = () => (
    <div>
        <h1>Hello World</h1>
        <Link href="/about" title="About Page">
          <a>Me</a>
        </Link>
        <Link href="/work">
          <a>Work</a>
        </Link>
        <Link href="/inspiration">
          <a>Inspiration</a>
        </Link>
    </div>
);

export default App;