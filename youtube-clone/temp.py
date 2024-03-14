def grade_students(marks_dict):
    highest = float('-inf') 
    lowest = float('inf')   
    highest_students = []        
    lowest_students = []           
    for student, mark in marks_dict.items():
        if mark > highest:
            highest = mark
            highest_students = [student]
        elif mark == highest:
            highest_students.append(student)
        
        if mark < lowest:
            lowest = mark
            lowest_students = [student]
        elif mark == lowest:
            lowest_students.append(student)
    print("Highest marks:")
    print(", ".join(f"{student}" for student in highest_students), f"({highest})")

    print("Lowest marks:")
    print(", ".join(f"{student}" for student in lowest_students), f"({lowest})")

marks_dict = {
    "Alice": 85,
    "Bob": 90,
    "Charlie": 75,
    "David": 90,
    "Eve": 80
}

grade_students(marks_dict)
