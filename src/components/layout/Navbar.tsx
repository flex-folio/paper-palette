import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <div className="bg-secondary">
            <nav className="container mx-auto p-4 flex justify-between align-middle">
                <p className="text-xl font-bold text-primary my-auto">
                    Paper Palette
                </p>
                <Button variant="default">Login</Button>
            </nav>
        </div>
    );
}
