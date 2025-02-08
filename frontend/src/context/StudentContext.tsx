import { createContext, useContext } from "react";

interface StudentContextType {
    // add properties here
}

export const StudentContext = createContext<StudentContextType | undefined>(undefined)


// export const StudentProvider = ({ children }: StudentProviderProps) => {
export const StudentProvider = ({ children }: any) => {

    const value = {}

    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    )
}


export const useStudent = () => {
    const context = useContext(StudentContext)
    if (context === undefined) {
        throw new Error('useStudent must be used within a StudentProvider')
    }
    return context
}
