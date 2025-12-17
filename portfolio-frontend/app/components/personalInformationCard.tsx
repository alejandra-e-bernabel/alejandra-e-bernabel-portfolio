import Image from "next/image";
import Link from "next/link";

const PersonalInformationCard = () => {
    return (
        <div className="flex flex-col items-center space-y-4 p-6 bg-white">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden relative bg-gray-200">
                <Image
                    src="/headshot.jpg"
                    alt="Alejandra Bernabel"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Name */}
            <h2 className="text-xl font-bold text-center">Alejandra Bernabel</h2>

            {/* Role */}
            <p className="text-base font-normal text-center">Software Engineer</p>

            {/* Contact Buttons */}
            <div className="flex flex-row space-x-3 pt-2">
                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/alejandra-e-bernabel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FFB400] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <div className="w-5 h-5 relative">
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            fill
                            className="object-contain brightness-0"
                        />
                    </div>
                </Link>

                {/* GitHub */}
                <Link
                    href="https://github.com/alejandra-e-bernabel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#FFB400] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <div className="w-5 h-5 relative">
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            fill
                            className="object-contain brightness-0"
                        />
                    </div>
                </Link>

                {/* Email */}
                <a
                    href="mailto:alejandra.e.bernabel@gmail.com"
                    className="w-10 h-10 rounded-full bg-[#FFB400] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <div className="w-5 h-5 relative">
                        <Image
                            src="/icons/mail.svg"
                            alt="Email"
                            fill
                            className="object-contain brightness-0"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default PersonalInformationCard;
