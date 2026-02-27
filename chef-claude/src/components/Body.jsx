export default function Body() {
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g, Oregano"
                    aria-label="Add ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>
        </main>
    )
}