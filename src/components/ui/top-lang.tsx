
export function Lang() {
    const languages = [
        { name: "TypeScript", percentage: 40.5, color: "#3178C6" },
        { name: "JavaScript", percentage: 30.0, color: "#F7DF1E" },
        { name: "Python", percentage: 15.0, color: "#3776AB" }
    ]

    return (
        <>
            <div className="h-2 w-full flex rounded-full overflow-hidden mb-6 bg-neutral-200 dark:bg-neutral-800">
                {languages.map((lang) => (
                    <div
                        key={lang.name}
                        className="h-full"
                        style={{
                            width: `${(lang.percentage / languages.reduce((sum, lang) => sum + lang.percentage, 0)) * 100}%`,
                            backgroundColor: lang.color,
                        }}
                        title={`${lang.name}: ${lang.percentage}%`}
                    />
                ))}
            </div>

            <div className="grid gap-4">
                {languages.map((lang) => (
                    <div key={lang.name} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">{lang.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                        </div>

                        <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-1">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${lang.percentage}%`,
                                    backgroundColor: lang.color,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
