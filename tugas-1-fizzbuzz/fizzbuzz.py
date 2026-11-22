def get_fizzbuzz_value(number: int) -> str:
    """
    Mengembalikan nilai FizzBuzz sesuai aturan:
    - Habis dibagi 3 dan 5 -> 'FizzBuzz'
    - Habis dibagi 3 -> 'Fizz'
    - Habis dibagi 5 -> 'Buzz'
    - Lainnya -> string dari angka itu sendiri
    """
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return str(number)


def main():
    print("=== Program FizzBuzz (Python) ===")
    user_input = input("Masukkan batas angka (tekan Enter untuk default 100): ").strip()

    # Validasi input
    if user_input == "":
        limit = 100
        print("Menggunakan nilai default: 100\n")
    else:
        try:
            limit = int(user_input)
            if limit <= 0:
                print("Peringatan: Angka harus lebih besar dari 0. Menggunakan default 100.\n")
                limit = 100
            else:
                print(f"Menjalankan FizzBuzz dari 1 sampai {limit}:\n")
        except ValueError:
            print("Input tidak valid. Menggunakan nilai default 100.\n")
            limit = 100

    # Menampilkan hasil FizzBuzz dari 1 sampai limit
    for i in range(1, limit + 1):
        print(get_fizzbuzz_value(i))


if __name__ == "__main__":
    main()
