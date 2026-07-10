import Hero from './components/home/Hero';
import About from './components/home/About';
import SelectedWork from './components/home/SelectedWork';

export default function HomePage() {
    return (
        <main className="mx-auto max-w-4xl px-4 pb-8 sm:px-6">
            <Hero />
            <About />
            <SelectedWork />
        </main>
    );
}
