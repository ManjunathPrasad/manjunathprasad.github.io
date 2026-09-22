import { Download } from "lucide-react";

import SectionHeader from "./SectionHeader";

import { useCourse } from "../../../context/useCourse";

export default function BlowupSyllabus() {

    const { blowupSyllabus } = useCourse();

    if (blowupSyllabus.length === 0) {
        return null;
    }

    return (

        <section
            id="blowup-syllabus"
            className="
                scroll-mt-36
                border-t
                border-slate-200
                py-20
            "
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeader
                    eyebrow="Lecture Plan"
                    title="Blow-up Syllabus"
                    description="A day-wise breakdown of every theory class, from commencement to completion of the syllabus."
                />

                <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200">

                    <table className="w-full text-left text-sm">

                        <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">

                            <tr>
                                <th className="px-4 py-3 sm:px-6">Day</th>
                                <th className="px-4 py-3 sm:px-6">Date</th>
                                <th className="px-4 py-3 sm:px-6">Topic</th>
                                <th className="px-4 py-3 sm:px-6">Resource</th>
                            </tr>

                        </thead>

                        <tbody className="divide-y divide-slate-100">

                            {blowupSyllabus.map((entry, index) => (

                                <tr
                                    key={entry.day}
                                    className={index % 2 === 1 ? "bg-slate-50/60" : undefined}
                                >

                                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-900 sm:px-6">
                                        Day {entry.day}
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                                        <div className="font-medium text-slate-900">{entry.date}</div>
                                        <div className="text-xs text-slate-500">{entry.weekday}</div>
                                    </td>

                                    <td className="px-4 py-4 sm:px-6">
                                        <div className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                                            {entry.unit}
                                        </div>
                                        <div className="mt-1 text-slate-700">{entry.topic}</div>
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-4 sm:px-6">

                                        {entry.resource.uploaded ? (

                                            <a
                                                href={entry.resource.file}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
                                            >
                                                <Download size={16} />
                                                Download
                                            </a>

                                        ) : (

                                            <span className="text-slate-400">Coming Soon</span>

                                        )}

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

    );

}
