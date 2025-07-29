import ProjectCard from './components/ProjectCard'

function App() {

    return (
        <>
            <header>
                <h1>Bite-sized!</h1>
                <p>A collection of small, fun projects, each created in under a week. Click on each one to take a look.</p>
                <p>Be sure to check in frequently, I'm always adding new things!</p>
            </header>
            <main>
                <div className="projects-container">
                    <ProjectCard
                        href="https://beatrizdoneux.github.io/timer"
                        className="pomodoro"
                    >
                        <h2>Pomodoro Timer</h2>
                    </ProjectCard>
                    <ProjectCard
                        href="https://beatrizdoneux.github.io/snake/"
                        className="snake"
                    >
                        <h2>Snake</h2>
                    </ProjectCard>
                </div>
            </main>
            <footer>
                <p>&copy; Beatriz Doneux</p>
            </footer>
        </>
    )
}

export default App
