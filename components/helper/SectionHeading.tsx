type Props = {
    heading: string
    heading2: string
}

const SectionHeading = ({ heading, heading2 }: Props) => {
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                {heading}
            </h1>
            <p className="text-sm text-gray-700">
                {heading2}
            </p>
        </div>
    )
}

export default SectionHeading
