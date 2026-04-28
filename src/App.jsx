import Button from '@/components/Button';

function App() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-xl">
                <h1 className="text-3xl font-bold">Tailwind đã chạy</h1>
                <p className="mt-3 text-slate-300">React + Vite + Tailwind CSS setup thành công.</p>
                <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700">
                    Test Button
                </button>
            </div>

            <div className="p-8">
                <Button>Save</Button>
                <Button variant="secondary" className="ml-3">
                    Cancel
                </Button>
                <Button variant="danger" size="lg" className="ml-3">
                    Delete
                </Button>
            </div>

            <div>
                <button className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-white hover:bg-[var(--color-primary-hover)]">
                    Submit
                </button>
            </div>

            <div>
                <div className="rounded-[var(--radius-card)] border p-4 shadow-sm">
                    Card content
                </div>
            </div>
        </main>
    );
}

export default App;
