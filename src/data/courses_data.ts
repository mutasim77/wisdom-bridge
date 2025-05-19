export interface Lesson {
  id: string;
  title: string;
  url: string;
  youtubeId: string;
}

export interface Chapter {
  id: string;
  title: string;
  url: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  url: string;
  chapters: Chapter[];
}

export const coursesData: Course[] = [
  {
    "id": "algebra",
    "title": "Algebra",
    "url": "https://www.video-tutor.net/algebra.html",
    "chapters": [
      {
        "id": "linear-equations",
        "title": "Linear Equations",
        "url": "https://www.video-tutor.net/linear-equations.html",
        "lessons": [
          {
            "id": "linear-equations-lesson-1",
            "title": "Solving Linear Equations",
            "url": "https://www.youtube.com/watch?v=7DPWeBszNSM",
            "youtubeId": "7DPWeBszNSM"
          },
          {
            "id": "linear-equations-lesson-3",
            "title": "Introduction to Slope",
            "url": "https://www.youtube.com/watch?v=PaD0A_2Qa-g",
            "youtubeId": "PaD0A_2Qa-g"
          },
          {
            "id": "linear-equations-lesson-4",
            "title": "How to Calculate the Slope of a Line from a Graph",
            "url": "https://www.youtube.com/watch?v=jlkE4VCnhdE",
            "youtubeId": "jlkE4VCnhdE"
          },
          {
            "id": "linear-equations-lesson-5",
            "title": "How to Calculate the Slope of a Line Given Two Points",
            "url": "https://www.youtube.com/watch?v=Id_UqMLAXzY",
            "youtubeId": "Id_UqMLAXzY"
          },
          {
            "id": "linear-equations-lesson-6",
            "title": "Slope Intercept Form",
            "url": "https://www.youtube.com/watch?v=qXX47hS2KLw",
            "youtubeId": "qXX47hS2KLw"
          },
          {
            "id": "linear-equations-lesson-7",
            "title": "Slope Intercept Form to Standard Form",
            "url": "https://www.youtube.com/watch?v=mCzVZptDhvU",
            "youtubeId": "mCzVZptDhvU"
          },
          {
            "id": "linear-equations-lesson-8",
            "title": "How to Find the X and Y Intercepts of a Line",
            "url": "https://www.youtube.com/watch?v=zL1E5w2sMxc",
            "youtubeId": "zL1E5w2sMxc"
          },
          {
            "id": "linear-equations-lesson-9",
            "title": "Point Slope Form",
            "url": "https://www.youtube.com/watch?v=yoHs1h5qtuQ",
            "youtubeId": "yoHs1h5qtuQ"
          },
          {
            "id": "linear-equations-lesson-10",
            "title": "How to Graph Linear Equations in Point Slope Form",
            "url": "https://www.youtube.com/watch?v=XzG-fi__hsU",
            "youtubeId": "XzG-fi__hsU"
          },
          {
            "id": "linear-equations-lesson-11",
            "title": "The Intercept Form",
            "url": "https://www.youtube.com/watch?v=cj8tCDRpUg8",
            "youtubeId": "cj8tCDRpUg8"
          },
          {
            "id": "linear-equations-lesson-12",
            "title": "How to Find the Slope and Y-Intercept - Many Examples!",
            "url": "https://www.youtube.com/watch?v=fyJAOD3X5tw",
            "youtubeId": "fyJAOD3X5tw"
          },
          {
            "id": "linear-equations-lesson-13",
            "title": "How to Graph Horizontal and Vertical Lines",
            "url": "https://www.youtube.com/watch?v=ADGduYvdFmc",
            "youtubeId": "ADGduYvdFmc"
          },
          {
            "id": "linear-equations-lesson-14",
            "title": "How to Find the Equation of a Line Given the Slope and a Point",
            "url": "https://www.youtube.com/watch?v=Ms5ojdI6UuM",
            "youtubeId": "Ms5ojdI6UuM"
          },
          {
            "id": "linear-equations-lesson-15",
            "title": "How to Find the Equation of a Line Given Two Points",
            "url": "https://www.youtube.com/watch?v=lzqTD0JWwhY",
            "youtubeId": "lzqTD0JWwhY"
          },
          {
            "id": "linear-equations-lesson-16",
            "title": "How to Find the Equation of a Line from a Graph",
            "url": "https://www.youtube.com/watch?v=JaX_dIDUYBg",
            "youtubeId": "JaX_dIDUYBg"
          },
          {
            "id": "linear-equations-lesson-17",
            "title": "How to Find the Equation Given the X and Y Intercepts",
            "url": "https://www.youtube.com/watch?v=ri1bagtR08A",
            "youtubeId": "ri1bagtR08A"
          },
          {
            "id": "linear-equations-lesson-18",
            "title": "How to Find the Linear Equation from a Function Table",
            "url": "https://www.youtube.com/watch?v=DffvEuX1v60",
            "youtubeId": "DffvEuX1v60"
          },
          {
            "id": "linear-equations-lesson-19",
            "title": "Finding Linear Equations - More Example Problems!",
            "url": "https://www.youtube.com/watch?v=CN4-ty9e5Jk",
            "youtubeId": "CN4-ty9e5Jk"
          },
          {
            "id": "linear-equations-lesson-20",
            "title": "How to Find the Point of Intersection of 2 Lines",
            "url": "https://www.youtube.com/watch?v=R0bGxNzgL2o",
            "youtubeId": "R0bGxNzgL2o"
          },
          {
            "id": "linear-equations-lesson-21",
            "title": "How to Tell if 2 Lines are Parallel, Perpendicular, or Neither",
            "url": "https://www.youtube.com/watch?v=Uq8pSFaXPmQ",
            "youtubeId": "Uq8pSFaXPmQ"
          },
          {
            "id": "linear-equations-lesson-22",
            "title": "Writing Linear Equations of Parallel and Perpendicular Lines",
            "url": "https://www.youtube.com/watch?v=Nj6OKT-zKWg",
            "youtubeId": "Nj6OKT-zKWg"
          },
          {
            "id": "linear-equations-lesson-23",
            "title": "Intro to Direct Variation",
            "url": "https://www.youtube.com/watch?v=vh8Bs1iSrag",
            "youtubeId": "vh8Bs1iSrag"
          },
          {
            "id": "linear-equations-lesson-24",
            "title": "Linear Equations - Formula Review",
            "url": "https://www.youtube.com/watch?v=FmQJBY66nVA",
            "youtubeId": "FmQJBY66nVA"
          },
        ]
      },
      {
        "id": "systems-of-equations",
        "title": "Systems of Equations",
        "url": "https://www.video-tutor.net/systems-of-equations.html",
        "lessons": [
          {
            "id": "systems-of-equations-lesson-1",
            "title": "How to Determine if an Ordered Pair is a Solution",
            "url": "https://www.youtube.com/watch?v=QfWJDQrj4kU",
            "youtubeId": "QfWJDQrj4kU"
          },
          {
            "id": "systems-of-equations-lesson-2",
            "title": "Solving Systems of Equations With 2 Variables",
            "url": "https://www.youtube.com/watch?v=oKqtgz2eo-Y",
            "youtubeId": "oKqtgz2eo-Y"
          },
          {
            "id": "systems-of-equations-lesson-3",
            "title": "Systems of Equations With 2 Variables - More Examples!",
            "url": "https://www.youtube.com/watch?v=cblHUeq3bkE",
            "youtubeId": "cblHUeq3bkE"
          },
          {
            "id": "systems-of-equations-lesson-4",
            "title": "Solving Systems of Equations with Fractions and Decimals",
            "url": "https://www.youtube.com/watch?v=jlddJQ1qYDU",
            "youtubeId": "jlddJQ1qYDU"
          },
          {
            "id": "systems-of-equations-lesson-5",
            "title": "One Solution, No Solution, or Infinitely Many Solutions?",
            "url": "https://www.youtube.com/watch?v=bq5gDsEdN3Q",
            "youtubeId": "bq5gDsEdN3Q"
          },
          {
            "id": "systems-of-equations-lesson-6",
            "title": "Solving Systems of Equations by Graphing",
            "url": "https://www.youtube.com/watch?v=Pd4hwS8qHms",
            "youtubeId": "Pd4hwS8qHms"
          },
          {
            "id": "systems-of-equations-lesson-7",
            "title": "Solving Systems of Equations with 3 Variables",
            "url": "https://www.youtube.com/watch?v=0JQeo0yC9OQ",
            "youtubeId": "0JQeo0yC9OQ"
          },
          {
            "id": "systems-of-equations-lesson-8",
            "title": "System of Equations - Word Problem",
            "url": "https://www.youtube.com/watch?v=YgtidDkjJ9M",
            "youtubeId": "YgtidDkjJ9M"
          }
        ]
      },
      {
        "id": "inequalities",
        "title": "Inequalities",
        "url": "https://www.video-tutor.net/inequalities.html",
        "lessons": [
          {
            "id": "inequalities-lesson-1",
            "title": "How to Plot Inequalities on a Number Line",
            "url": "https://www.youtube.com/watch?v=KkiYqww4eg0",
            "youtubeId": "KkiYqww4eg0"
          },
          {
            "id": "inequalities-lesson-2",
            "title": "How to Solve Linear Inequalities",
            "url": "https://www.youtube.com/watch?v=rIl2USa8XPY",
            "youtubeId": "rIl2USa8XPY"
          },
          {
            "id": "inequalities-lesson-3",
            "title": "Solving Compound Inequalities",
            "url": "https://www.youtube.com/watch?v=msiceXvwriE",
            "youtubeId": "msiceXvwriE"
          },
          {
            "id": "inequalities-lesson-4",
            "title": "How to Graph Linear Inequalities in 2 Variables",
            "url": "https://www.youtube.com/watch?v=cskHdgwB5k8",
            "youtubeId": "cskHdgwB5k8"
          },
          {
            "id": "inequalities-lesson-5",
            "title": "Graphing Systems of Linear Inequalities",
            "url": "https://www.youtube.com/watch?v=FWbcKade3rw",
            "youtubeId": "FWbcKade3rw"
          },
          {
            "id": "inequalities-lesson-6",
            "title": "Writing Systems of Inequalities",
            "url": "https://www.youtube.com/watch?v=nzAVay2_2yA",
            "youtubeId": "nzAVay2_2yA"
          },
          {
            "id": "inequalities-lesson-7",
            "title": "Linear Programming",
            "url": "https://www.youtube.com/watch?v=Bzzqx1F23a8",
            "youtubeId": "Bzzqx1F23a8"
          }
        ]
      },
      {
        "id": "absolute-value-equations",
        "title": "Absolute Value Equations",
        "url": "https://www.video-tutor.net/absolute-value-equations.html",
        "lessons": [
          {
            "id": "absolute-value-equations-lesson-1",
            "title": "How to Solve Absolute Value Equations",
            "url": "https://www.youtube.com/watch?v=_cHbhzQVd7Y",
            "youtubeId": "_cHbhzQVd7Y"
          },
          {
            "id": "absolute-value-equations-lesson-2",
            "title": "Solving Absolute Value Equations - More Examples!",
            "url": "https://www.youtube.com/watch?v=sCcsnuwihEw",
            "youtubeId": "sCcsnuwihEw"
          },
          {
            "id": "absolute-value-equations-lesson-3",
            "title": "Checking For Extraneous Solutions",
            "url": "https://www.youtube.com/watch?v=zZMHbnswvbw",
            "youtubeId": "zZMHbnswvbw"
          },
          {
            "id": "absolute-value-equations-lesson-4",
            "title": "Solving Absolute Value Inequalities",
            "url": "https://www.youtube.com/watch?v=ZJvOGkykJ44",
            "youtubeId": "ZJvOGkykJ44"
          },
          {
            "id": "absolute-value-equations-lesson-5",
            "title": "How to Graph Absolute Value Functions",
            "url": "https://www.youtube.com/watch?v=ld4UD98yHio",
            "youtubeId": "ld4UD98yHio"
          },
          {
            "id": "absolute-value-equations-lesson-6",
            "title": "How to Find the Axis of Symmetry and the Vertex",
            "url": "https://www.youtube.com/watch?v=4V3VpwiwOKs",
            "youtubeId": "4V3VpwiwOKs"
          }
        ]
      },
      {
        "id": "exponents",
        "title": "Exponents",
        "url": "https://www.video-tutor.net/exponents.html",
        "lessons": [
          {
            "id": "exponents-lesson-1",
            "title": "Introduction to Exponents",
            "url": "https://www.youtube.com/watch?v=ZtTO8uUGy2Y",
            "youtubeId": "ZtTO8uUGy2Y"
          },
          {
            "id": "exponents-lesson-2",
            "title": "Negative Exponents",
            "url": "https://www.youtube.com/watch?v=TKj8kEofbAw",
            "youtubeId": "TKj8kEofbAw"
          },
          {
            "id": "exponents-lesson-3",
            "title": "Simplifying Exponents",
            "url": "https://www.youtube.com/watch?v=Zt2fdy3zrZU",
            "youtubeId": "Zt2fdy3zrZU"
          },
          {
            "id": "exponents-lesson-4",
            "title": "Fractional Exponents",
            "url": "https://www.youtube.com/watch?v=GipavLCnke0",
            "youtubeId": "GipavLCnke0"
          },
          {
            "id": "exponents-lesson-5",
            "title": "Irrational Exponents",
            "url": "https://www.youtube.com/watch?v=GTcWsATN7aY",
            "youtubeId": "GTcWsATN7aY"
          },
          {
            "id": "exponents-lesson-6",
            "title": "Exponents and Tetration",
            "url": "https://www.youtube.com/watch?v=S3s9cWWnZj0",
            "youtubeId": "S3s9cWWnZj0"
          }
        ]
      },
      {
        "id": "factoring",
        "title": "Factoring",
        "url": "https://www.video-tutor.net/factoring.html",
        "lessons": [
          {
            "id": "factoring-lesson-1",
            "title": "How to Factor the Greatest Common Factor (GCF)",
            "url": "https://www.youtube.com/watch?v=ynefQgfxZBs",
            "youtubeId": "ynefQgfxZBs"
          },
          {
            "id": "factoring-lesson-2",
            "title": "How to Factor Binomials - Difference of Perfect Squares",
            "url": "https://www.youtube.com/watch?v=vypGuPy6g2A",
            "youtubeId": "vypGuPy6g2A"
          },
          {
            "id": "factoring-lesson-3",
            "title": "How to Factor Binomials - Sum and Difference of Perfect Cubes",
            "url": "https://www.youtube.com/watch?v=ADj8sGSjewg",
            "youtubeId": "ADj8sGSjewg"
          },
          {
            "id": "factoring-lesson-4",
            "title": "How to Factor Trinomials",
            "url": "https://www.youtube.com/watch?v=B3bWbon_5WY",
            "youtubeId": "B3bWbon_5WY"
          },
          {
            "id": "factoring-lesson-5",
            "title": "Factoring Trinomials with Large Numbers",
            "url": "https://www.youtube.com/watch?v=zw7nUKHc4n0",
            "youtubeId": "zw7nUKHc4n0"
          },
          {
            "id": "factoring-lesson-6",
            "title": "How to Factor Perfect Square Trinomials",
            "url": "https://www.youtube.com/watch?v=f6yhfmW41wI",
            "youtubeId": "f6yhfmW41wI"
          },
          {
            "id": "factoring-lesson-7",
            "title": "How to Factor by Grouping",
            "url": "https://www.youtube.com/watch?v=t7-JCa7phCQ",
            "youtubeId": "t7-JCa7phCQ"
          },
          {
            "id": "factoring-lesson-8",
            "title": "How to Factor Trinomials With 2 Variables",
            "url": "https://www.youtube.com/watch?v=XKXgwR8z9LE",
            "youtubeId": "XKXgwR8z9LE"
          },
          {
            "id": "factoring-lesson-9",
            "title": "How to Factor Cubic Polynomials",
            "url": "https://www.youtube.com/watch?v=rnAKWPM-YBc",
            "youtubeId": "rnAKWPM-YBc"
          },
          {
            "id": "factoring-lesson-10",
            "title": "Factoring Higher Degree Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=HKDdzBuffoY",
            "youtubeId": "HKDdzBuffoY"
          },
          {
            "id": "factoring-lesson-11",
            "title": "Factoring Polynomials with Multiple Variables - Special Cases",
            "url": "https://www.youtube.com/watch?v=ugU2LZr7mvM",
            "youtubeId": "ugU2LZr7mvM"
          },
          {
            "id": "factoring-lesson-12",
            "title": "Factoring Polynomials with Negative Exponents",
            "url": "https://www.youtube.com/watch?v=dOuI8pvevcw",
            "youtubeId": "dOuI8pvevcw"
          },
          {
            "id": "factoring-lesson-13",
            "title": "Factoring Expressions with Rational Exponents",
            "url": "https://www.youtube.com/watch?v=BpS6mO4V2wc",
            "youtubeId": "BpS6mO4V2wc"
          },
          {
            "id": "factoring-lesson-14",
            "title": "Factoring Formulas",
            "url": "https://www.youtube.com/watch?v=UewcqbjlTco",
            "youtubeId": "UewcqbjlTco"
          },
          {
            "id": "factoring-lesson-15",
            "title": "Factoring Binomials Using Special Formulas",
            "url": "https://www.youtube.com/watch?v=701hI1r2mLI",
            "youtubeId": "701hI1r2mLI"
          },
          {
            "id": "factoring-lesson-16",
            "title": "How to Factor Completely",
            "url": "https://www.youtube.com/watch?v=2x657vOBkXY",
            "youtubeId": "2x657vOBkXY"
          },
          {
            "id": "factoring-lesson-18",
            "title": "More Factoring Practice Problems",
            "url": "https://www.youtube.com/watch?v=9MUDAr1PnlE",
            "youtubeId": "9MUDAr1PnlE"
          }
        ]
      },
      {
        "id": "quadratic-equations",
        "title": "Quadratic Equations",
        "url": "https://www.video-tutor.net/quadratic-equations.html",
        "lessons": [
          {
            "id": "quadratic-equations-lesson-1",
            "title": "How to Solve Simple Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=-KWsS2FZVTA",
            "youtubeId": "-KWsS2FZVTA"
          },
          {
            "id": "quadratic-equations-lesson-2",
            "title": "Solving Simple Quadratic Equations - More Examples!",
            "url": "https://www.youtube.com/watch?v=4sy4UomdpQg",
            "youtubeId": "4sy4UomdpQg"
          },
          {
            "id": "quadratic-equations-lesson-3",
            "title": "The Zero Product Property",
            "url": "https://www.youtube.com/watch?v=J7MjMM_mi4k",
            "youtubeId": "J7MjMM_mi4k"
          },
          {
            "id": "quadratic-equations-lesson-4",
            "title": "How to Solve Quadratic Equations by Factoring",
            "url": "https://www.youtube.com/watch?v=qeByhTF8WEw",
            "youtubeId": "qeByhTF8WEw"
          },
          {
            "id": "quadratic-equations-lesson-5",
            "title": "How to Solve Quadratic Equations Using the Quadratic Formula",
            "url": "https://www.youtube.com/watch?v=IlNAJl36-10",
            "youtubeId": "IlNAJl36-10"
          },
          {
            "id": "quadratic-equations-lesson-6",
            "title": "How to Factor Difficult Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=VG1luiL_INQ",
            "youtubeId": "VG1luiL_INQ"
          },
          {
            "id": "quadratic-equations-lesson-7",
            "title": "Solving Quadratic Equations by Completing the Square",
            "url": "https://www.youtube.com/watch?v=WOb25i8FBBw",
            "youtubeId": "WOb25i8FBBw"
          },
          {
            "id": "quadratic-equations-lesson-8",
            "title": "How to Prove the Quadratic Formula by Completing the Square",
            "url": "https://www.youtube.com/watch?v=ApzMwQ2yfUE",
            "youtubeId": "ApzMwQ2yfUE"
          },
          {
            "id": "quadratic-equations-lesson-9",
            "title": "Solving Quadratic Equations with Imaginary Numbers",
            "url": "https://www.youtube.com/watch?v=83WrPCagHRg",
            "youtubeId": "83WrPCagHRg"
          },
          {
            "id": "quadratic-equations-lesson-10",
            "title": "Solving Equations in Quadratic Form Using Substitution",
            "url": "https://www.youtube.com/watch?v=eWjixwGK3YM",
            "youtubeId": "eWjixwGK3YM"
          },
          {
            "id": "quadratic-equations-lesson-11",
            "title": "The Discriminant of a Quadratic Equation",
            "url": "https://www.youtube.com/watch?v=6fU9ZgwbU74",
            "youtubeId": "6fU9ZgwbU74"
          },
          {
            "id": "quadratic-equations-lesson-12",
            "title": "Writing Quadratic Equations Given the Solutions",
            "url": "https://www.youtube.com/watch?v=SB6eCyG4GEA",
            "youtubeId": "SB6eCyG4GEA"
          },
          {
            "id": "quadratic-equations-lesson-13",
            "title": "Writing Quadratic Equations Given the Points and Y-intercept",
            "url": "https://www.youtube.com/watch?v=pN44X-V7Sck",
            "youtubeId": "pN44X-V7Sck"
          },
          {
            "id": "quadratic-equations-lesson-14",
            "title": "Writing Quadratic Equations Given the Sum and Product of Roots",
            "url": "https://www.youtube.com/watch?v=jd3dmr6cVf8",
            "youtubeId": "jd3dmr6cVf8"
          },
          {
            "id": "quadratic-equations-lesson-15",
            "title": "Finding the Sum and Product of the Roots",
            "url": "https://www.youtube.com/watch?v=kBSj35rik8w",
            "youtubeId": "kBSj35rik8w"
          },
          {
            "id": "quadratic-equations-lesson-16",
            "title": "Standard Form to Vertex Form",
            "url": "https://www.youtube.com/watch?v=pf9LkX8hpTQ",
            "youtubeId": "pf9LkX8hpTQ"
          },
          {
            "id": "quadratic-equations-lesson-17",
            "title": "The Intercept Form of a Quadratic Equation",
            "url": "https://www.youtube.com/watch?v=wtPOz0CHSUk",
            "youtubeId": "wtPOz0CHSUk"
          },
          {
            "id": "quadratic-equations-lesson-18",
            "title": "Quadratic Equations - Formulas and Notes",
            "url": "https://www.youtube.com/watch?v=aLMcf8HMl4U",
            "youtubeId": "aLMcf8HMl4U"
          },
          {
            "id": "quadratic-equations-lesson-19",
            "title": "Graphing Quadratic Functions Using Transformations",
            "url": "https://www.youtube.com/watch?v=H8OQtxSRe_k",
            "youtubeId": "H8OQtxSRe_k"
          },
          {
            "id": "quadratic-equations-lesson-20",
            "title": "How to Find the Axis of Symmetry",
            "url": "https://www.youtube.com/watch?v=tyzd4VujaqY",
            "youtubeId": "tyzd4VujaqY"
          },
          {
            "id": "quadratic-equations-lesson-21",
            "title": "Graphing Quadratic Functions Using a Data Table",
            "url": "https://www.youtube.com/watch?v=TJNonQWYjkI",
            "youtubeId": "TJNonQWYjkI"
          },
          {
            "id": "quadratic-equations-lesson-22",
            "title": "Graphing Quadratic Functions in Vertex Form",
            "url": "https://www.youtube.com/watch?v=OHH7fX_M8Ns",
            "youtubeId": "OHH7fX_M8Ns"
          },
          {
            "id": "quadratic-equations-lesson-23",
            "title": "Graphing Quadratic Functions in Standard Form",
            "url": "https://www.youtube.com/watch?v=uYNKJWFYh7k",
            "youtubeId": "uYNKJWFYh7k"
          },
          {
            "id": "quadratic-equations-lesson-24",
            "title": "Graphing Quadratic Functions in Intercept Form",
            "url": "https://www.youtube.com/watch?v=D5Iv3qbzl2k",
            "youtubeId": "D5Iv3qbzl2k"
          },
          {
            "id": "quadratic-equations-lesson-25",
            "title": "Maximum and Minimum Value Word Problems",
            "url": "https://www.youtube.com/watch?v=d5YktqR-4FU",
            "youtubeId": "d5YktqR-4FU"
          },
          {
            "id": "quadratic-equations-lesson-26",
            "title": "Writing Quadratic Functions Given the Graph",
            "url": "https://www.youtube.com/watch?v=WadV9GNRd_0",
            "youtubeId": "WadV9GNRd_0"
          },
          {
            "id": "quadratic-equations-lesson-27",
            "title": "Solving Systems of Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=rq5AjFs95qw",
            "youtubeId": "rq5AjFs95qw"
          },
          {
            "id": "quadratic-equations-lesson-28",
            "title": "Solving Systems of Nonlinear Equations",
            "url": "https://www.youtube.com/watch?v=JPdLEaxlnZQ",
            "youtubeId": "JPdLEaxlnZQ"
          },
          {
            "id": "quadratic-equations-lesson-29",
            "title": "How to Solve Quadratic Inequalities",
            "url": "https://www.youtube.com/watch?v=_gWjLKsFOPE",
            "youtubeId": "_gWjLKsFOPE"
          },
          {
            "id": "quadratic-equations-lesson-30",
            "title": "Solving a System of Quadratic Inequalities",
            "url": "https://www.youtube.com/watch?v=kqIhCU2zZ8A",
            "youtubeId": "kqIhCU2zZ8A"
          },
          {
            "id": "quadratic-equations-lesson-32",
            "title": "Multiple Choice Practice Problems",
            "url": "https://www.youtube.com/watch?v=fFFA7Q4eVuY",
            "youtubeId": "fFFA7Q4eVuY"
          }
        ]
      },
      {
        "id": "polynomials",
        "title": "Polynomials",
        "url": "https://www.video-tutor.net/polynomials.html",
        "lessons": [
          {
            "id": "polynomials-lesson-1",
            "title": "Classifying Monomials, Binomials, and Trinomials",
            "url": "https://www.youtube.com/watch?v=Rxx4HepHI_E",
            "youtubeId": "Rxx4HepHI_E"
          },
          {
            "id": "polynomials-lesson-2",
            "title": "How to Find the Degree of a Polynomial",
            "url": "https://www.youtube.com/watch?v=cADQ4Wk4wFc",
            "youtubeId": "cADQ4Wk4wFc"
          },
          {
            "id": "polynomials-lesson-3",
            "title": "Adding, Subtracting, Multiplying, & Dividing Polynomials",
            "url": "https://www.youtube.com/watch?v=ZvL9aDGNHqA",
            "youtubeId": "ZvL9aDGNHqA"
          },
          {
            "id": "polynomials-lesson-4",
            "title": "Dividing Polynomials by Monomials and Binomials",
            "url": "https://www.youtube.com/watch?v=KyHXWAp7UGo",
            "youtubeId": "KyHXWAp7UGo"
          },
          {
            "id": "polynomials-lesson-5",
            "title": "Long Division with Polynomials",
            "url": "https://www.youtube.com/watch?v=_FSXJmESFmQ",
            "youtubeId": "_FSXJmESFmQ"
          },
          {
            "id": "polynomials-lesson-6",
            "title": "How to Factor Polynomials",
            "url": "https://www.youtube.com/watch?v=U6FndtdgpcA",
            "youtubeId": "U6FndtdgpcA"
          },
          {
            "id": "polynomials-lesson-7",
            "title": "Synthetic Division of Polynomials",
            "url": "https://www.youtube.com/watch?v=FxHWoUOq2iQ",
            "youtubeId": "FxHWoUOq2iQ"
          },
          {
            "id": "polynomials-lesson-8",
            "title": "The Remainder Theorem",
            "url": "https://www.youtube.com/watch?v=p1lSRAeEMR0",
            "youtubeId": "p1lSRAeEMR0"
          },
          {
            "id": "polynomials-lesson-9",
            "title": "The Factor Theorem",
            "url": "https://www.youtube.com/watch?v=zAGP46nR6-0",
            "youtubeId": "zAGP46nR6-0"
          },
          {
            "id": "polynomials-lesson-10",
            "title": "Finding the Zeros of a Polynomial Function - Rational Zero Theorem",
            "url": "https://www.youtube.com/watch?v=Iaq7z7reznM",
            "youtubeId": "Iaq7z7reznM"
          },
          {
            "id": "polynomials-lesson-11",
            "title": "Solving Polynomial Equations - More Problems!",
            "url": "https://www.youtube.com/watch?v=ZaXaBcZxhq4",
            "youtubeId": "ZaXaBcZxhq4"
          },
          {
            "id": "polynomials-lesson-12",
            "title": "Solving Polynomial Equations with Excel",
            "url": "https://www.youtube.com/watch?v=lomAl6XB_SM",
            "youtubeId": "lomAl6XB_SM"
          },
          {
            "id": "polynomials-lesson-13",
            "title": "How to Find the Real and Imaginary Solutions of a Polynomial",
            "url": "https://www.youtube.com/watch?v=tRrPfxR5h-w",
            "youtubeId": "tRrPfxR5h-w"
          },
          {
            "id": "polynomials-lesson-14",
            "title": "Descartes Rule of Signs",
            "url": "https://www.youtube.com/watch?v=YaU5JTe3cPU",
            "youtubeId": "YaU5JTe3cPU"
          },
          {
            "id": "polynomials-lesson-15",
            "title": "Solving Polynomial Inequalities",
            "url": "https://www.youtube.com/watch?v=Fd5ys4PQ-aM",
            "youtubeId": "Fd5ys4PQ-aM"
          },
          {
            "id": "polynomials-lesson-16",
            "title": "Writing Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=vu0JmblDgog",
            "youtubeId": "vu0JmblDgog"
          },
          {
            "id": "polynomials-lesson-17",
            "title": "Graphing Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=a5x4lwnvHM0",
            "youtubeId": "a5x4lwnvHM0"
          },
          {
            "id": "polynomials-lesson-18",
            "title": "How to Find the Polynomial Function from a Graph",
            "url": "https://www.youtube.com/watch?v=bb0seGYHUiQ",
            "youtubeId": "bb0seGYHUiQ"
          }
        ]
      },
      {
        "id": "rational-functions",
        "title": "Rational Functions",
        "url": "https://www.video-tutor.net/rational-functions.html",
        "lessons": [
          {
            "id": "rational-functions-lesson-1",
            "title": "Simplifying Rational Expressions",
            "url": "https://www.youtube.com/watch?v=uVpsz-xpnPo",
            "youtubeId": "uVpsz-xpnPo"
          },
          {
            "id": "rational-functions-lesson-2",
            "title": "Multiplying Rational Expressions",
            "url": "https://www.youtube.com/watch?v=RROSgr4oXjU",
            "youtubeId": "RROSgr4oXjU"
          },
          {
            "id": "rational-functions-lesson-3",
            "title": "Dividing Rational Expressions",
            "url": "https://www.youtube.com/watch?v=rMVOdIDNjpA",
            "youtubeId": "rMVOdIDNjpA"
          },
          {
            "id": "rational-functions-lesson-4",
            "title": "Adding & Subtracting Rational Expressions with Like Denominators",
            "url": "https://www.youtube.com/watch?v=WWwG2uh4OUE",
            "youtubeId": "WWwG2uh4OUE"
          },
          {
            "id": "rational-functions-lesson-5",
            "title": "Adding & Subtracting Rational Expressions with Unlike Denominators",
            "url": "https://www.youtube.com/watch?v=1KGVwaUhR-s",
            "youtubeId": "1KGVwaUhR-s"
          },
          {
            "id": "rational-functions-lesson-6",
            "title": "Simplifying Complex Rational Expressions",
            "url": "https://www.youtube.com/watch?v=ifDEetTq8bM",
            "youtubeId": "ifDEetTq8bM"
          },
          {
            "id": "rational-functions-lesson-7",
            "title": "Solving Rational Equations",
            "url": "https://www.youtube.com/watch?v=1fR_9ke5-n8",
            "youtubeId": "1fR_9ke5-n8"
          },
          {
            "id": "rational-functions-lesson-8",
            "title": "Solving Rational Equations - More Examples!",
            "url": "https://www.youtube.com/watch?v=iI5WPrd8uc0",
            "youtubeId": "iI5WPrd8uc0"
          },
          {
            "id": "rational-functions-lesson-9",
            "title": "Finding Extraneous Solutions of Rational Equations",
            "url": "https://www.youtube.com/watch?v=PvMYq9JD724",
            "youtubeId": "PvMYq9JD724"
          },
          {
            "id": "rational-functions-lesson-10",
            "title": "Time and Work Problems",
            "url": "https://www.youtube.com/watch?v=zUE59CNlFsI",
            "youtubeId": "zUE59CNlFsI"
          },
          {
            "id": "rational-functions-lesson-11",
            "title": "How to Solve Systems of Rational Equations",
            "url": "https://www.youtube.com/watch?v=bkbSNNYfN2E",
            "youtubeId": "bkbSNNYfN2E"
          },
          {
            "id": "rational-functions-lesson-12",
            "title": "Introduction to Reciprocal Functions",
            "url": "https://www.youtube.com/watch?v=MK_Cep8C3g0",
            "youtubeId": "MK_Cep8C3g0"
          },
          {
            "id": "rational-functions-lesson-13",
            "title": "Domain and Range of Reciprocal Functions",
            "url": "https://www.youtube.com/watch?v=gTm-n2yep8E",
            "youtubeId": "gTm-n2yep8E"
          },
          {
            "id": "rational-functions-lesson-14",
            "title": "How to Graph Rational Functions",
            "url": "https://www.youtube.com/watch?v=bWVhwYdSnfk",
            "youtubeId": "bWVhwYdSnfk"
          },
          {
            "id": "rational-functions-lesson-15",
            "title": "Horizontal and Slant Asymptotes",
            "url": "https://www.youtube.com/watch?v=kvhpu1TkSjI",
            "youtubeId": "kvhpu1TkSjI"
          },
          {
            "id": "rational-functions-lesson-16",
            "title": "How to Find a Rational Function Given Two Points",
            "url": "https://www.youtube.com/watch?v=ODs3t1vX1GY",
            "youtubeId": "ODs3t1vX1GY"
          },
          {
            "id": "rational-functions-lesson-17",
            "title": "How to Find the X and Y Intercepts of a Rational Function",
            "url": "https://www.youtube.com/watch?v=ebpEDR4-Q3Y",
            "youtubeId": "ebpEDR4-Q3Y"
          },
          {
            "id": "rational-functions-lesson-18",
            "title": "How to Graph Advanced Rational Functions",
            "url": "https://www.youtube.com/watch?v=GxynsEIvjRA",
            "youtubeId": "GxynsEIvjRA"
          }
        ]
      },
      {
        "id": "radical-functions",
        "title": "Radical Functions",
        "url": "https://www.video-tutor.net/radical-functions.html",
        "lessons": [
          {
            "id": "radical-functions-lesson-1",
            "title": "Square Roots and Cube Roots",
            "url": "https://www.youtube.com/watch?v=IWzPle0KDPo",
            "youtubeId": "IWzPle0KDPo"
          },
          {
            "id": "radical-functions-lesson-2",
            "title": "Simplifying Radicals",
            "url": "https://www.youtube.com/watch?v=U7AXF75rC00",
            "youtubeId": "U7AXF75rC00"
          },
          {
            "id": "radical-functions-lesson-3",
            "title": "Multiplying Radical Expressions with Variables and Exponents",
            "url": "https://www.youtube.com/watch?v=i0TMNeOwpSg",
            "youtubeId": "i0TMNeOwpSg"
          },
          {
            "id": "radical-functions-lesson-4",
            "title": "Adding and Subtracting Radical Expressions",
            "url": "https://www.youtube.com/watch?v=83wXAgwcWH0",
            "youtubeId": "83wXAgwcWH0"
          },
          {
            "id": "radical-functions-lesson-5",
            "title": "How to Simplify Cube Roots",
            "url": "https://www.youtube.com/watch?v=VdUNTsf14qs",
            "youtubeId": "VdUNTsf14qs"
          },
          {
            "id": "radical-functions-lesson-6",
            "title": "How to Rationalize the Denominator",
            "url": "https://www.youtube.com/watch?v=5j8a75aHaSE",
            "youtubeId": "5j8a75aHaSE"
          },
          {
            "id": "radical-functions-lesson-7",
            "title": "How to Rationalize the Numerator",
            "url": "https://www.youtube.com/watch?v=OmaFy0NKTss",
            "youtubeId": "OmaFy0NKTss"
          },
          {
            "id": "radical-functions-lesson-8",
            "title": "Multiplying Radical Expressions with Different Index Numbers",
            "url": "https://www.youtube.com/watch?v=onOQMAcnj8U",
            "youtubeId": "onOQMAcnj8U"
          },
          {
            "id": "radical-functions-lesson-9",
            "title": "Solving Radical Equations",
            "url": "https://www.youtube.com/watch?v=0gicD4STzpg",
            "youtubeId": "0gicD4STzpg"
          },
          {
            "id": "radical-functions-lesson-10",
            "title": "Checking for Extraneous Solutions of Radical Equations",
            "url": "https://www.youtube.com/watch?v=ea9kgUY0FSw",
            "youtubeId": "ea9kgUY0FSw"
          },
          {
            "id": "radical-functions-lesson-11",
            "title": "Solving Radical Equations - Hard Example",
            "url": "https://www.youtube.com/watch?v=z4lx9G9Smvs",
            "youtubeId": "z4lx9G9Smvs"
          },
          {
            "id": "radical-functions-lesson-12",
            "title": "Solving Equations with Cube Roots",
            "url": "https://www.youtube.com/watch?v=mg8aS58vsN8",
            "youtubeId": "mg8aS58vsN8"
          },
          {
            "id": "radical-functions-lesson-13",
            "title": "Solving Radical Equations - More Example Problems",
            "url": "https://www.youtube.com/watch?v=g3rzuggIgIw",
            "youtubeId": "g3rzuggIgIw"
          },
          {
            "id": "radical-functions-lesson-14",
            "title": "How to Solve a Composite Radical Equation",
            "url": "https://www.youtube.com/watch?v=laEeUSZr83s",
            "youtubeId": "laEeUSZr83s"
          },
          {
            "id": "radical-functions-lesson-15",
            "title": "How to Graph Radical Equations",
            "url": "https://www.youtube.com/watch?v=8t9_IXFzH_M",
            "youtubeId": "8t9_IXFzH_M"
          },
          {
            "id": "radical-functions-lesson-16",
            "title": "How to Find the Domain of a Radical Function",
            "url": "https://www.youtube.com/watch?v=fOlon31vEU4",
            "youtubeId": "fOlon31vEU4"
          },
          {
            "id": "radical-functions-lesson-17",
            "title": "How to Graph Cube Root Functions",
            "url": "https://www.youtube.com/watch?v=qxR6p_xDnho",
            "youtubeId": "qxR6p_xDnho"
          },
          {
            "id": "radical-functions-lesson-18",
            "title": "Multiplying Composite Radicals with Different Indices",
            "url": "https://www.youtube.com/watch?v=g2BiyNYpTOQ",
            "youtubeId": "g2BiyNYpTOQ"
          },
          {
            "id": "radical-functions-lesson-20",
            "title": "Radical Expressions - Practice Quiz",
            "url": "https://www.youtube.com/watch?v=wOcc5EoOojE",
            "youtubeId": "wOcc5EoOojE"
          }
        ]
      },
      {
        "id": "complex-numbers",
        "title": "Complex Numbers",
        "url": "https://www.video-tutor.net/complex-numbers.html",
        "lessons": [
          {
            "id": "complex-numbers-lesson-1",
            "title": "Introduction to Imaginary Numbers",
            "url": "https://www.youtube.com/watch?v=vRJqPo_zcnQ",
            "youtubeId": "vRJqPo_zcnQ"
          },
          {
            "id": "complex-numbers-lesson-2",
            "title": "How to Graph Complex Numbers",
            "url": "https://www.youtube.com/watch?v=BJ6b9t0ryhU",
            "youtubeId": "BJ6b9t0ryhU"
          },
          {
            "id": "complex-numbers-lesson-3",
            "title": "Absolute Value of Complex Numbers",
            "url": "https://www.youtube.com/watch?v=wmnQgD5oqQw",
            "youtubeId": "wmnQgD5oqQw"
          },
          {
            "id": "complex-numbers-lesson-4",
            "title": "Adding and Subtracting Complex Numbers",
            "url": "https://www.youtube.com/watch?v=qNNX79cnFyQ",
            "youtubeId": "qNNX79cnFyQ"
          },
          {
            "id": "complex-numbers-lesson-5",
            "title": "Multiplying Complex Numbers",
            "url": "https://www.youtube.com/watch?v=MzCS_8Rzja8",
            "youtubeId": "MzCS_8Rzja8"
          },
          {
            "id": "complex-numbers-lesson-6",
            "title": "Dividing Complex Numbers",
            "url": "https://www.youtube.com/watch?v=EfRRpVB62Ko",
            "youtubeId": "EfRRpVB62Ko"
          },
          {
            "id": "complex-numbers-lesson-7",
            "title": "Simplifying Complex Numbers",
            "url": "https://www.youtube.com/watch?v=XyksedEntD4",
            "youtubeId": "XyksedEntD4"
          },
          {
            "id": "complex-numbers-lesson-8",
            "title": "Solving Equations with Complex Numbers",
            "url": "https://www.youtube.com/watch?v=nRawKl7jP1M",
            "youtubeId": "nRawKl7jP1M"
          },
          {
            "id": "complex-numbers-lesson-10",
            "title": "Complex Numbers - Practice Problems",
            "url": "https://www.youtube.com/watch?v=y2wPAZwZTng",
            "youtubeId": "y2wPAZwZTng"
          },
          {
            "id": "complex-numbers-lesson-11",
            "title": "De Moivre's Theorem - Complex Numbers in Polar Form",
            "url": "https://www.youtube.com/watch?v=J6TnZxUUzqU",
            "youtubeId": "J6TnZxUUzqU"
          }
        ]
      },
      {
        "id": "logarithms",
        "title": "Logarithms",
        "url": "https://www.video-tutor.net/logarithms.html",
        "lessons": [
          {
            "id": "logarithms-lesson-1",
            "title": "Evaluating Logarithms",
            "url": "https://www.youtube.com/watch?v=kqVpPSzkTYA",
            "youtubeId": "kqVpPSzkTYA"
          },
          {
            "id": "logarithms-lesson-2",
            "title": "Converting Logarithmic Equations to Exponential Form",
            "url": "https://www.youtube.com/watch?v=f0C1KL7GkqY",
            "youtubeId": "f0C1KL7GkqY"
          },
          {
            "id": "logarithms-lesson-3",
            "title": "Change of Base Formula",
            "url": "https://www.youtube.com/watch?v=FFm-zaFW_X4",
            "youtubeId": "FFm-zaFW_X4"
          },
          {
            "id": "logarithms-lesson-4",
            "title": "Change of Base Formula - Example Problem",
            "url": "https://www.youtube.com/watch?v=p7hD9VdXv9U",
            "youtubeId": "p7hD9VdXv9U"
          },
          {
            "id": "logarithms-lesson-5",
            "title": "Properties of Logarithms",
            "url": "https://www.youtube.com/watch?v=Jtv9Lnf7Zw8",
            "youtubeId": "Jtv9Lnf7Zw8"
          },
          {
            "id": "logarithms-lesson-6",
            "title": "Expanding Logarithmic Expressions",
            "url": "https://www.youtube.com/watch?v=OIz-5MyJA3g",
            "youtubeId": "OIz-5MyJA3g"
          },
          {
            "id": "logarithms-lesson-7",
            "title": "Condensing Logarithmic Expressions",
            "url": "https://www.youtube.com/watch?v=luRrOlsB4cY",
            "youtubeId": "luRrOlsB4cY"
          },
          {
            "id": "logarithms-lesson-8",
            "title": "Natural Logarithms",
            "url": "https://www.youtube.com/watch?v=daUlTsnCNRQ",
            "youtubeId": "daUlTsnCNRQ"
          },
          {
            "id": "logarithms-lesson-9",
            "title": "Solving Exponential Equations",
            "url": "https://www.youtube.com/watch?v=9tutJ5xrRwg",
            "youtubeId": "9tutJ5xrRwg"
          },
          {
            "id": "logarithms-lesson-10",
            "title": "Solving Exponential Equations with the Quadratic Formula",
            "url": "https://www.youtube.com/watch?v=1_XHAzgUi1o",
            "youtubeId": "1_XHAzgUi1o"
          },
          {
            "id": "logarithms-lesson-11",
            "title": "Solving Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=fnhFneOz6n8",
            "youtubeId": "fnhFneOz6n8"
          },
          {
            "id": "logarithms-lesson-12",
            "title": "Solving Difficult Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=PIx0Z0LqqFY",
            "youtubeId": "PIx0Z0LqqFY"
          },
          {
            "id": "logarithms-lesson-13",
            "title": "Graphing Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=-nptxS9rZNA",
            "youtubeId": "-nptxS9rZNA"
          },
          {
            "id": "logarithms-lesson-14",
            "title": "Graphing Exponential Functions",
            "url": "https://www.youtube.com/watch?v=DASfP8KAyvs",
            "youtubeId": "DASfP8KAyvs"
          },
          {
            "id": "logarithms-lesson-15",
            "title": "Graphing Natural Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=ymXD6xCmzJE",
            "youtubeId": "ymXD6xCmzJE"
          },
          {
            "id": "logarithms-lesson-16",
            "title": "Compound Interest Problems",
            "url": "https://www.youtube.com/watch?v=Hn0eLcOSQGw",
            "youtubeId": "Hn0eLcOSQGw"
          },
          {
            "id": "logarithms-lesson-17",
            "title": "Interest Compounded Continuously Problems",
            "url": "https://www.youtube.com/watch?v=Ln97Hd7AiDc",
            "youtubeId": "Ln97Hd7AiDc"
          },
          {
            "id": "logarithms-lesson-18",
            "title": "Compound Interest and Population Growth Word Problems",
            "url": "https://www.youtube.com/watch?v=k4LLdFFLRmQ",
            "youtubeId": "k4LLdFFLRmQ"
          },
          {
            "id": "logarithms-lesson-19",
            "title": "Exponential Growth and Decay Word Problems",
            "url": "https://www.youtube.com/watch?v=e5nwJKUc3bA",
            "youtubeId": "e5nwJKUc3bA"
          },
          {
            "id": "logarithms-lesson-20",
            "title": "Solving Exponential Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=6CrXFvvwsaE",
            "youtubeId": "6CrXFvvwsaE"
          },
          {
            "id": "logarithms-lesson-21",
            "title": "Logarithms and Euler's Number",
            "url": "https://www.youtube.com/watch?v=pDFcu_wLOzo",
            "youtubeId": "pDFcu_wLOzo"
          },
          {
            "id": "logarithms-lesson-22",
            "title": "Proving Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=I9tWTx9xcuc",
            "youtubeId": "I9tWTx9xcuc"
          },
          {
            "id": "logarithms-lesson-23",
            "title": "Finding the Inverse of a Logarithmic Function",
            "url": "https://www.youtube.com/watch?v=hNsvGz7JPJQ",
            "youtubeId": "hNsvGz7JPJQ"
          },
          {
            "id": "logarithms-lesson-25",
            "title": "Logarithmic Practice Problems",
            "url": "https://www.youtube.com/watch?v=7DVbQKI600k",
            "youtubeId": "7DVbQKI600k"
          }
        ]
      },
      {
        "id": "conic-sections",
        "title": "Conic Sections",
        "url": "https://www.video-tutor.net/conic-sections.html",
        "lessons": [
          {
            "id": "conic-sections-lesson-1",
            "title": "Introduction to Conic Sections",
            "url": "https://www.youtube.com/watch?v=Q8BbZxkZSSA",
            "youtubeId": "Q8BbZxkZSSA"
          },
          {
            "id": "conic-sections-lesson-2",
            "title": "Graphing and Writing Equations of Circles",
            "url": "https://www.youtube.com/watch?v=u_39J-syjB0",
            "youtubeId": "u_39J-syjB0"
          },
          {
            "id": "conic-sections-lesson-3",
            "title": "How to Graph Ellipses",
            "url": "https://www.youtube.com/watch?v=OPSCKXXvWiM",
            "youtubeId": "OPSCKXXvWiM"
          },
          {
            "id": "conic-sections-lesson-5",
            "title": "Eccentricity of an Ellipse",
            "url": "https://www.youtube.com/watch?v=9hyQksn80ug",
            "youtubeId": "9hyQksn80ug"
          },
          {
            "id": "conic-sections-lesson-6",
            "title": "The Area of an Ellipse",
            "url": "https://www.youtube.com/watch?v=Mw3MeDLL8d4",
            "youtubeId": "Mw3MeDLL8d4"
          },
          {
            "id": "conic-sections-lesson-7",
            "title": "Circumference of an Ellipse",
            "url": "https://www.youtube.com/watch?v=r5pl_stL4c0",
            "youtubeId": "r5pl_stL4c0"
          },
          {
            "id": "conic-sections-lesson-8",
            "title": "How to Graph Hyperbolas",
            "url": "https://www.youtube.com/watch?v=Iu-4-fizlD4",
            "youtubeId": "Iu-4-fizlD4"
          },
          {
            "id": "conic-sections-lesson-10",
            "title": "How to Graph Parabolas",
            "url": "https://www.youtube.com/watch?v=KYgmOTLbuqE",
            "youtubeId": "KYgmOTLbuqE"
          },
          {
            "id": "conic-sections-lesson-13",
            "title": "Conic Sections Quiz",
            "url": "https://www.youtube.com/watch?v=vqZO_CrEdPs",
            "youtubeId": "vqZO_CrEdPs"
          }
        ]
      },
      {
        "id": "sequences",
        "title": "Sequences and Series",
        "url": "https://www.video-tutor.net/sequences.html",
        "lessons": [
          {
            "id": "sequences-lesson-1",
            "title": "How to Find the Nth Term of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=PStn9zHgXHU",
            "youtubeId": "PStn9zHgXHU"
          },
          {
            "id": "sequences-lesson-2",
            "title": "Writing a General Formula of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=UPvyQV6wZQw",
            "youtubeId": "UPvyQV6wZQw"
          },
          {
            "id": "sequences-lesson-3",
            "title": "Writing the First 4 Terms of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=VGaUKSuaQMw",
            "youtubeId": "VGaUKSuaQMw"
          },
          {
            "id": "sequences-lesson-4",
            "title": "Recursive Formulas of Sequences",
            "url": "https://www.youtube.com/watch?v=IFHZQ6MaG6w",
            "youtubeId": "IFHZQ6MaG6w"
          },
          {
            "id": "sequences-lesson-5",
            "title": "How to Find the Sum of an Arithmetic Series",
            "url": "https://www.youtube.com/watch?v=JH0MsP_48ic",
            "youtubeId": "JH0MsP_48ic"
          },
          {
            "id": "sequences-lesson-6",
            "title": "How to Derive the Formula for the Sum of an Arithmetic Series",
            "url": "https://www.youtube.com/watch?v=SXRQcxt6jsk",
            "youtubeId": "SXRQcxt6jsk"
          },
          {
            "id": "sequences-lesson-7",
            "title": "Sigma and Summation Notation",
            "url": "https://www.youtube.com/watch?v=xavgv1m9feE",
            "youtubeId": "xavgv1m9feE"
          },
          {
            "id": "sequences-lesson-8",
            "title": "Arithmetic Sequence Formulas",
            "url": "https://www.youtube.com/watch?v=IshPbnP3vk8",
            "youtubeId": "IshPbnP3vk8"
          },
          {
            "id": "sequences-lesson-10",
            "title": "Arithmetic Sequences and Series",
            "url": "https://www.youtube.com/watch?v=XZJdyPkCxuE",
            "youtubeId": "XZJdyPkCxuE"
          },
          {
            "id": "sequences-lesson-12",
            "title": "The Geometric Mean",
            "url": "https://www.youtube.com/watch?v=xt07TExQNVg",
            "youtubeId": "xt07TExQNVg"
          },
          {
            "id": "sequences-lesson-13",
            "title": "The Mean Formulas",
            "url": "https://www.youtube.com/watch?v=6G6i8vSa8Zs",
            "youtubeId": "6G6i8vSa8Zs"
          },
          {
            "id": "sequences-lesson-14",
            "title": "Finding the Sum of a Finite Geometric Series",
            "url": "https://www.youtube.com/watch?v=uAnJmAFBpak",
            "youtubeId": "uAnJmAFBpak"
          },
          {
            "id": "sequences-lesson-15",
            "title": "Finding the Sum of an Infinite Geometric Series",
            "url": "https://www.youtube.com/watch?v=jxRqRLMliPc",
            "youtubeId": "jxRqRLMliPc"
          },
          {
            "id": "sequences-lesson-16",
            "title": "How to Derive the Sum Formula of a Geometric Series",
            "url": "https://www.youtube.com/watch?v=PqXAjCXYbNk",
            "youtubeId": "PqXAjCXYbNk"
          },
          {
            "id": "sequences-lesson-17",
            "title": "Geometric Sequences and Exponential Growth Problems",
            "url": "https://www.youtube.com/watch?v=aPXT8Ibqe9I",
            "youtubeId": "aPXT8Ibqe9I"
          },
          {
            "id": "sequences-lesson-18",
            "title": "Geometric Sequences and Series",
            "url": "https://www.youtube.com/watch?v=zRKZ0-kOUZM",
            "youtubeId": "zRKZ0-kOUZM"
          },
          {
            "id": "sequences-lesson-20",
            "title": "The Fibonacci Sequence",
            "url": "https://www.youtube.com/watch?v=mVO2dcuR7P0",
            "youtubeId": "mVO2dcuR7P0"
          }
        ]
      },
      {
        "id": "matrices",
        "title": "Matrices",
        "url": "https://www.video-tutor.net/matrices.html",
        "lessons": [
          {
            "id": "matrices-lesson-1",
            "title": "Introduction to Matrices",
            "url": "https://www.youtube.com/watch?v=yRwQ7A6jVLk",
            "youtubeId": "yRwQ7A6jVLk"
          },
          {
            "id": "matrices-lesson-2",
            "title": "Adding and Subtracting Matrices",
            "url": "https://www.youtube.com/watch?v=QXUbFzEd3Ww",
            "youtubeId": "QXUbFzEd3Ww"
          },
          {
            "id": "matrices-lesson-3",
            "title": "Scalar Multiplication of Matrices",
            "url": "https://www.youtube.com/watch?v=iJERwUVuwtY",
            "youtubeId": "iJERwUVuwtY"
          },
          {
            "id": "matrices-lesson-4",
            "title": "Solving Matrix Equations",
            "url": "https://www.youtube.com/watch?v=UHhvcj0doaA",
            "youtubeId": "UHhvcj0doaA"
          },
          {
            "id": "matrices-lesson-5",
            "title": "How to Multiply Matrices",
            "url": "https://www.youtube.com/watch?v=vzt9c7iWPxs",
            "youtubeId": "vzt9c7iWPxs"
          },
          {
            "id": "matrices-lesson-6",
            "title": "Multiplying Matrices - More Examples!",
            "url": "https://www.youtube.com/watch?v=2spTnAiQg4M",
            "youtubeId": "2spTnAiQg4M"
          },
          {
            "id": "matrices-lesson-7",
            "title": "Elementary Row Operations",
            "url": "https://www.youtube.com/watch?v=9PNCjHemIhI",
            "youtubeId": "9PNCjHemIhI"
          },
          {
            "id": "matrices-lesson-8",
            "title": "Gaussian Elimination",
            "url": "https://www.youtube.com/watch?v=eDb6iugi6Uk",
            "youtubeId": "eDb6iugi6Uk"
          },
          {
            "id": "matrices-lesson-9",
            "title": "Gauss Jordan Elimination",
            "url": "https://www.youtube.com/watch?v=eYSASx8_nyg",
            "youtubeId": "eYSASx8_nyg"
          },
          {
            "id": "matrices-lesson-10",
            "title": "Gaussian Elimination with 4 Variables",
            "url": "https://www.youtube.com/watch?v=4VAXv6yRULU",
            "youtubeId": "4VAXv6yRULU"
          },
          {
            "id": "matrices-lesson-11",
            "title": "Inverse of a 2x2 Matrix",
            "url": "https://www.youtube.com/watch?v=aiBgjz5xbyg",
            "youtubeId": "aiBgjz5xbyg"
          },
          {
            "id": "matrices-lesson-12",
            "title": "Inverse of a 3x3 Matrix",
            "url": "https://www.youtube.com/watch?v=Fg7_mv3izR0",
            "youtubeId": "Fg7_mv3izR0"
          },
          {
            "id": "matrices-lesson-13",
            "title": "Determinants of 2x2 Matrices",
            "url": "https://www.youtube.com/watch?v=3ROzG6n4yMc",
            "youtubeId": "3ROzG6n4yMc"
          },
          {
            "id": "matrices-lesson-14",
            "title": "Determinant of a 3x3 Matrix",
            "url": "https://www.youtube.com/watch?v=eYjSu_xXUUQ",
            "youtubeId": "eYjSu_xXUUQ"
          },
          {
            "id": "matrices-lesson-15",
            "title": "Finding the Determinant of a 3x3 Matrix - The Easy Way!",
            "url": "https://www.youtube.com/watch?v=z5Yf7QwrotE",
            "youtubeId": "z5Yf7QwrotE"
          },
          {
            "id": "matrices-lesson-16",
            "title": "Determinant of a 4x4 Matrix",
            "url": "https://www.youtube.com/watch?v=fWzUwrt1Z0s",
            "youtubeId": "fWzUwrt1Z0s"
          },
          {
            "id": "matrices-lesson-17",
            "title": "Using Cramer's Rule to Solve a 2x2 Linear System",
            "url": "https://www.youtube.com/watch?v=vXqlIOX2itM",
            "youtubeId": "vXqlIOX2itM"
          },
          {
            "id": "matrices-lesson-18",
            "title": "Using Cramer's Rule to Solve a 3x3 Linear System",
            "url": "https://www.youtube.com/watch?v=Ot87qLTODdQ",
            "youtubeId": "Ot87qLTODdQ"
          },
          {
            "id": "matrices-lesson-19",
            "title": "Finding the Area of a Triangle Using Matrices & Determinants",
            "url": "https://www.youtube.com/watch?v=IvmQvWJ8nMM",
            "youtubeId": "IvmQvWJ8nMM"
          }
        ]
      },
      {
        "id": "probability",
        "title": "Basic Probability",
        "url": "https://www.video-tutor.net/probability.html",
        "lessons": [
          {
            "id": "probability-lesson-1",
            "title": "Introduction to Probability",
            "url": "https://www.youtube.com/watch?v=SkidyDQuupA",
            "youtubeId": "SkidyDQuupA"
          },
          {
            "id": "probability-lesson-2",
            "title": "Probability Formulas",
            "url": "https://www.youtube.com/watch?v=bddckR734aM",
            "youtubeId": "bddckR734aM"
          },
          {
            "id": "probability-lesson-3",
            "title": "Probability of Complementary Events",
            "url": "https://www.youtube.com/watch?v=0T-CaQCiSf4",
            "youtubeId": "0T-CaQCiSf4"
          },
          {
            "id": "probability-lesson-4",
            "title": "Conditional Probability with Venn Diagrams and Contingency Tables",
            "url": "https://www.youtube.com/watch?v=sqDVrXq_eh0",
            "youtubeId": "sqDVrXq_eh0"
          },
          {
            "id": "probability-lesson-5",
            "title": "Probability of Independent and Dependent Events",
            "url": "https://www.youtube.com/watch?v=lWAdPyvm400",
            "youtubeId": "lWAdPyvm400"
          },
          {
            "id": "probability-lesson-6",
            "title": "Probability of Mutually Exclusive Events",
            "url": "https://www.youtube.com/watch?v=X6usGgwXFyU",
            "youtubeId": "X6usGgwXFyU"
          },
          {
            "id": "probability-lesson-7",
            "title": "Multiplication and Addition Rule",
            "url": "https://www.youtube.com/watch?v=94AmzeR9n2w",
            "youtubeId": "94AmzeR9n2w"
          },
          {
            "id": "probability-lesson-8",
            "title": "Compound Probability with Coins and 52 Playing Cards",
            "url": "https://www.youtube.com/watch?v=EHU6pVSczb4",
            "youtubeId": "EHU6pVSczb4"
          },
          {
            "id": "probability-lesson-9",
            "title": "How to Calculate Expected Value",
            "url": "https://www.youtube.com/watch?v=b6VK2VPMXNI",
            "youtubeId": "b6VK2VPMXNI"
          },
          {
            "id": "probability-lesson-10",
            "title": "Probability of Tree Diagrams",
            "url": "https://www.youtube.com/watch?v=w4wKXVwtGac",
            "youtubeId": "w4wKXVwtGac"
          },
          {
            "id": "probability-lesson-11",
            "title": "Bayes Theorem",
            "url": "https://www.youtube.com/watch?v=OByl4RJxnKA",
            "youtubeId": "OByl4RJxnKA"
          },
          {
            "id": "probability-lesson-12",
            "title": "Probability Distribution Formulas",
            "url": "https://www.youtube.com/watch?v=KMLR_lOnVmI",
            "youtubeId": "KMLR_lOnVmI"
          },
          {
            "id": "probability-lesson-13",
            "title": "Probability of a Binomial Distribution",
            "url": "https://www.youtube.com/watch?v=3PWKQiLK41M",
            "youtubeId": "3PWKQiLK41M"
          },
          {
            "id": "probability-lesson-14",
            "title": "Geometric Distribution",
            "url": "https://www.youtube.com/watch?v=d5iAWPnrH6w",
            "youtubeId": "d5iAWPnrH6w"
          },
          {
            "id": "probability-lesson-15",
            "title": "The Poisson Distribution",
            "url": "https://www.youtube.com/watch?v=m0o-585xwW0",
            "youtubeId": "m0o-585xwW0"
          },
          {
            "id": "probability-lesson-16",
            "title": "Continuous vs Discrete Data",
            "url": "https://www.youtube.com/watch?v=cz4nPSA9rlc",
            "youtubeId": "cz4nPSA9rlc"
          },
          {
            "id": "probability-lesson-17",
            "title": "Continuous Probability Distributions",
            "url": "https://www.youtube.com/watch?v=QxqxdQ_g2uw",
            "youtubeId": "QxqxdQ_g2uw"
          },
          {
            "id": "probability-lesson-18",
            "title": "Cumulative and Probability Density Functions",
            "url": "https://www.youtube.com/watch?v=3xAIWiTJCvE",
            "youtubeId": "3xAIWiTJCvE"
          },
          {
            "id": "probability-lesson-19",
            "title": "Continuous Uniform Distribution Problems",
            "url": "https://www.youtube.com/watch?v=KfunVw-0AH0",
            "youtubeId": "KfunVw-0AH0"
          },
          {
            "id": "probability-lesson-20",
            "title": "Probability Exponential Distribution Problems",
            "url": "https://www.youtube.com/watch?v=J3KSjZFVbis",
            "youtubeId": "J3KSjZFVbis"
          },
          {
            "id": "probability-lesson-21",
            "title": "Standard Normal Distribution",
            "url": "https://www.youtube.com/watch?v=CjF_yQ2N638",
            "youtubeId": "CjF_yQ2N638"
          },
          {
            "id": "probability-lesson-22",
            "title": "Standard Normal Distribution with Calculus",
            "url": "https://www.youtube.com/watch?v=gHBL5Zau3NE",
            "youtubeId": "gHBL5Zau3NE"
          },
          {
            "id": "probability-lesson-23",
            "title": "The Law of Large Numbers",
            "url": "https://www.youtube.com/watch?v=ihTpK6dXSas",
            "youtubeId": "ihTpK6dXSas"
          }
        ]
      },
      {
        "id": "statistics",
        "title": "Basic Statistics",
        "url": "https://www.video-tutor.net/statistics.html",
        "lessons": [
          {
            "id": "statistics-lesson-1",
            "title": "Introduction to Statistics",
            "url": "https://www.youtube.com/watch?v=XZo4xyJXCak",
            "youtubeId": "XZo4xyJXCak"
          },
          {
            "id": "statistics-lesson-2",
            "title": "Statistics - Formulas and Equations",
            "url": "https://www.youtube.com/watch?v=FP6qS5d3Ly4",
            "youtubeId": "FP6qS5d3Ly4"
          },
          {
            "id": "statistics-lesson-3",
            "title": "Mean, Median, Mode, and Range",
            "url": "https://www.youtube.com/watch?v=A1mQ9kD-i9I",
            "youtubeId": "A1mQ9kD-i9I"
          },
          {
            "id": "statistics-lesson-4",
            "title": "Finding the Missing Value Given the Mean",
            "url": "https://www.youtube.com/watch?v=l8KrAo089_U",
            "youtubeId": "l8KrAo089_U"
          },
          {
            "id": "statistics-lesson-5",
            "title": "The Weighted Mean",
            "url": "https://www.youtube.com/watch?v=LdrBNhWw9AM",
            "youtubeId": "LdrBNhWw9AM"
          },
          {
            "id": "statistics-lesson-6",
            "title": "The Mean Formulas",
            "url": "https://www.youtube.com/watch?v=6G6i8vSa8Zs",
            "youtubeId": "6G6i8vSa8Zs"
          },
          {
            "id": "statistics-lesson-7",
            "title": "How to Make a Simple Frequency Table",
            "url": "https://www.youtube.com/watch?v=lyRbCwDDnJo",
            "youtubeId": "lyRbCwDDnJo"
          },
          {
            "id": "statistics-lesson-8",
            "title": "How to Make a Dot Plot",
            "url": "https://www.youtube.com/watch?v=Iu17mY1VfZU",
            "youtubeId": "Iu17mY1VfZU"
          },
          {
            "id": "statistics-lesson-9",
            "title": "How to Make a Line Plot",
            "url": "https://www.youtube.com/watch?v=JnoBjHz2dtw",
            "youtubeId": "JnoBjHz2dtw"
          },
          {
            "id": "statistics-lesson-10",
            "title": "Stem and Leaf Plots",
            "url": "https://www.youtube.com/watch?v=MUCvUgGfzdo",
            "youtubeId": "MUCvUgGfzdo"
          },
          {
            "id": "statistics-lesson-11",
            "title": "How to Make a Histogram",
            "url": "https://www.youtube.com/watch?v=AndS0RLdxtk",
            "youtubeId": "AndS0RLdxtk"
          },
          {
            "id": "statistics-lesson-12",
            "title": "Quartiles, Deciles, and Percentiles",
            "url": "https://www.youtube.com/watch?v=40o82o3uNfk",
            "youtubeId": "40o82o3uNfk"
          },
          {
            "id": "statistics-lesson-13",
            "title": "How to Find the Interquartile Range",
            "url": "https://www.youtube.com/watch?v=STSP8gTSdT8",
            "youtubeId": "STSP8gTSdT8"
          },
          {
            "id": "statistics-lesson-14",
            "title": "Box and Whisker Plots",
            "url": "https://www.youtube.com/watch?v=mhaGAaL6Abw",
            "youtubeId": "mhaGAaL6Abw"
          },
          {
            "id": "statistics-lesson-15",
            "title": "How to Calculate the Standard Deviation",
            "url": "https://www.youtube.com/watch?v=IaTFpp-uzp0",
            "youtubeId": "IaTFpp-uzp0"
          },
          {
            "id": "statistics-lesson-16",
            "title": "How to Calculate the Variance",
            "url": "https://www.youtube.com/watch?v=deIQeQzPK08",
            "youtubeId": "deIQeQzPK08"
          }
        ]
      },
      {
        "id": "functions",
        "title": "Functions (Precalculus)",
        "url": "https://www.video-tutor.net/functions.html",
        "lessons": [
          {
            "id": "functions-lesson-1",
            "title": "What is a Function?",
            "url": "https://www.youtube.com/watch?v=7JZ0IfCQ488",
            "youtubeId": "7JZ0IfCQ488"
          },
          {
            "id": "functions-lesson-2",
            "title": "Evaluating Functions",
            "url": "https://www.youtube.com/watch?v=HyNie_PYgsY",
            "youtubeId": "HyNie_PYgsY"
          },
          {
            "id": "functions-lesson-3",
            "title": "Function Operations",
            "url": "https://www.youtube.com/watch?v=3gaxVHVI4cI",
            "youtubeId": "3gaxVHVI4cI"
          },
          {
            "id": "functions-lesson-4",
            "title": "Evaluating Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=OYOXMyFKotc",
            "youtubeId": "OYOXMyFKotc"
          },
          {
            "id": "functions-lesson-5",
            "title": "Graphing Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=Uzw9tsGq2Pw",
            "youtubeId": "Uzw9tsGq2Pw"
          },
          {
            "id": "functions-lesson-6",
            "title": "Increasing and Decreasing Functions",
            "url": "https://www.youtube.com/watch?v=EZeQxYg0zgg",
            "youtubeId": "EZeQxYg0zgg"
          },
          {
            "id": "functions-lesson-7",
            "title": "Identifying the Relative Maximum and Minimum Values",
            "url": "https://www.youtube.com/watch?v=GaltHJF6WyI",
            "youtubeId": "GaltHJF6WyI"
          },
          {
            "id": "functions-lesson-8",
            "title": "Finding the Domain and Range of a Function from a Graph",
            "url": "https://www.youtube.com/watch?v=KirGQOwjBVI",
            "youtubeId": "KirGQOwjBVI"
          },
          {
            "id": "functions-lesson-9",
            "title": "How to Find the Domain of a Function",
            "url": "https://www.youtube.com/watch?v=djT6-YamHaA",
            "youtubeId": "djT6-YamHaA"
          },
          {
            "id": "functions-lesson-10",
            "title": "How to Find the Range of a Function",
            "url": "https://www.youtube.com/watch?v=Si2vmzUWfJE",
            "youtubeId": "Si2vmzUWfJE"
          },
          {
            "id": "functions-lesson-11",
            "title": "The Difference Quotient",
            "url": "https://www.youtube.com/watch?v=qQgVomi8lCc",
            "youtubeId": "qQgVomi8lCc"
          },
          {
            "id": "functions-lesson-12",
            "title": "Function Operations",
            "url": "https://www.youtube.com/watch?v=3gaxVHVI4cI",
            "youtubeId": "3gaxVHVI4cI"
          },
          {
            "id": "functions-lesson-13",
            "title": "Composite Functions",
            "url": "https://www.youtube.com/watch?v=ZFPkQkURSxk",
            "youtubeId": "ZFPkQkURSxk"
          },
          {
            "id": "functions-lesson-14",
            "title": "How to Evaluate Composite Functions",
            "url": "https://www.youtube.com/watch?v=6vQxIG4lJ3w",
            "youtubeId": "6vQxIG4lJ3w"
          },
          {
            "id": "functions-lesson-15",
            "title": "Composition of Three Functions with a Data Table",
            "url": "https://www.youtube.com/watch?v=Ote1KvW6BXw",
            "youtubeId": "Ote1KvW6BXw"
          },
          {
            "id": "functions-lesson-16",
            "title": "Decomposing Functions",
            "url": "https://www.youtube.com/watch?v=NmfaC7etZms",
            "youtubeId": "NmfaC7etZms"
          },
          {
            "id": "functions-lesson-17",
            "title": "Even and Odd Functions",
            "url": "https://www.youtube.com/watch?v=fKyBOLsqRlo",
            "youtubeId": "fKyBOLsqRlo"
          },
          {
            "id": "functions-lesson-18",
            "title": "Linear Functions Review",
            "url": "https://www.youtube.com/watch?v=BtcKotD6Ni8",
            "youtubeId": "BtcKotD6Ni8"
          },
          {
            "id": "functions-lesson-19",
            "title": "Average Rate of Change of a Function",
            "url": "https://www.youtube.com/watch?v=f_Q0qlwlclQ",
            "youtubeId": "f_Q0qlwlclQ"
          },
          {
            "id": "functions-lesson-20",
            "title": "Introduction to Inverse Functions",
            "url": "https://www.youtube.com/watch?v=TN4ybFiuV3k",
            "youtubeId": "TN4ybFiuV3k"
          },
          {
            "id": "functions-lesson-21",
            "title": "How to Find the Inverse Function",
            "url": "https://www.youtube.com/watch?v=2zeYEx4eTdc",
            "youtubeId": "2zeYEx4eTdc"
          },
          {
            "id": "functions-lesson-22",
            "title": "How to Find the Domain of an Inverse Function",
            "url": "https://www.youtube.com/watch?v=wP4JjdFbCkY",
            "youtubeId": "wP4JjdFbCkY"
          },
          {
            "id": "functions-lesson-23",
            "title": "Verifying Inverse Functions",
            "url": "https://www.youtube.com/watch?v=6QamgSPprjA",
            "youtubeId": "6QamgSPprjA"
          },
          {
            "id": "functions-lesson-24",
            "title": "The Horizontal Line Test and One-to-One Functions",
            "url": "https://www.youtube.com/watch?v=6u9Qh1Vi_Qw",
            "youtubeId": "6u9Qh1Vi_Qw"
          },
          {
            "id": "functions-lesson-25",
            "title": "The Vertical Line Test",
            "url": "https://www.youtube.com/watch?v=Mxe2lX1htNk",
            "youtubeId": "Mxe2lX1htNk"
          },
          {
            "id": "functions-lesson-26",
            "title": "Evaluating Composite Inverse Functions",
            "url": "https://www.youtube.com/watch?v=GEgFmxxOJno",
            "youtubeId": "GEgFmxxOJno"
          },
          {
            "id": "functions-lesson-27",
            "title": "Graphing Inverse Functions",
            "url": "https://www.youtube.com/watch?v=ukEtad_aml4",
            "youtubeId": "ukEtad_aml4"
          },
          {
            "id": "functions-lesson-28",
            "title": "Transformations of Functions",
            "url": "https://www.youtube.com/watch?v=Tmdrjs9xufc",
            "youtubeId": "Tmdrjs9xufc"
          },
          {
            "id": "functions-lesson-32",
            "title": "Functions and Graphs",
            "url": "https://www.youtube.com/watch?v=kvU9sOzT2mk",
            "youtubeId": "kvU9sOzT2mk"
          }
        ]
      },
      {
        "id": "algebra-final-exam",
        "title": "Algebra Final Exam",
        "url": "https://www.video-tutor.net/algebra-final-exam.html",
        "lessons": [
          {
            "id": "algebra-final-exam-lesson-1",
            "title": "Free 2 Hour Video",
            "url": "https://www.youtube.com/watch?v=TbJ5gqLRpeM",
            "youtubeId": "TbJ5gqLRpeM"
          },
          {
            "id": "algebra-final-exam-lesson-3",
            "title": "15 Test Questions",
            "url": "https://www.youtube.com/watch?v=U0Y8nSmEpNM",
            "youtubeId": "U0Y8nSmEpNM"
          }
        ]
      },
    ]
  },
  {
    "id": "trigonometry",
    "title": "Trigonometry",
    "url": "https://www.video-tutor.net/trig.html",
    "chapters": [
      {
        "id": "basic-trigonometry",
        "title": "Basic Trigonometry",
        "url": "https://www.video-tutor.net/basic-trigonometry.html",
        "lessons": [
          {
            "id": "basic-trigonometry-lesson-1",
            "title": "Introduction to Trigonometry",
            "url": "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
            "youtubeId": "PUB0TaZ7bhA"
          },
          {
            "id": "basic-trigonometry-lesson-2",
            "title": "Introduction to Angles",
            "url": "https://www.youtube.com/watch?v=oxhXz9_uyiM",
            "youtubeId": "oxhXz9_uyiM"
          },
          {
            "id": "basic-trigonometry-lesson-3",
            "title": "Radians and Degrees",
            "url": "https://www.youtube.com/watch?v=JmLN3QxshlE",
            "youtubeId": "JmLN3QxshlE"
          },
          {
            "id": "basic-trigonometry-lesson-4",
            "title": "What Exactly is a Radian?",
            "url": "https://www.youtube.com/watch?v=CHCWXAkozHM",
            "youtubeId": "CHCWXAkozHM"
          },
          {
            "id": "basic-trigonometry-lesson-5",
            "title": "Coterminal Angles",
            "url": "https://www.youtube.com/watch?v=RkMhGwp8pv4",
            "youtubeId": "RkMhGwp8pv4"
          },
          {
            "id": "basic-trigonometry-lesson-6",
            "title": "Decimal Degrees to DMS",
            "url": "https://www.youtube.com/watch?v=W9kousU6AI0",
            "youtubeId": "W9kousU6AI0"
          },
          {
            "id": "basic-trigonometry-lesson-7",
            "title": "Arc Length and Area of a Sector",
            "url": "https://www.youtube.com/watch?v=C9z3FXS7nlo",
            "youtubeId": "C9z3FXS7nlo"
          },
          {
            "id": "basic-trigonometry-lesson-8",
            "title": "Linear Speed and Angular Velocity",
            "url": "https://www.youtube.com/watch?v=FgTvlGm9jgE",
            "youtubeId": "FgTvlGm9jgE"
          },
          {
            "id": "basic-trigonometry-lesson-9",
            "title": "- Finding the Angle Between the Hands of a Clock Given the Time",
            "url": "https://www.youtube.com/watch?v=LEHYr0XfSyI",
            "youtubeId": "LEHYr0XfSyI"
          },
          {
            "id": "basic-trigonometry-lesson-10",
            "title": "Introduction to the Unit Circle",
            "url": "https://www.youtube.com/watch?v=57VrEiEPD1I",
            "youtubeId": "57VrEiEPD1I"
          },
          {
            "id": "basic-trigonometry-lesson-11",
            "title": "How to Remember the Unit Circle",
            "url": "https://www.youtube.com/watch?v=gdJq1QunN-o",
            "youtubeId": "gdJq1QunN-o"
          },
          {
            "id": "basic-trigonometry-lesson-12",
            "title": "The Reference Angle",
            "url": "https://www.youtube.com/watch?v=E-xFXpVo14o",
            "youtubeId": "E-xFXpVo14o"
          }
        ]
      },
      {
        "id": "evaluating-trig-expressions",
        "title": "Evaluating Trig Expressions",
        "url": "https://www.video-tutor.net/evaluating-trig-expressions.html",
        "lessons": [
          {
            "id": "evaluating-trig-expressions-lesson-1",
            "title": "The Six Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=WvoFgL4P_rw",
            "youtubeId": "WvoFgL4P_rw"
          },
          {
            "id": "evaluating-trig-expressions-lesson-2",
            "title": "How to Solve Right Triangles",
            "url": "https://www.youtube.com/watch?v=i3bjEOA5_zc",
            "youtubeId": "i3bjEOA5_zc"
          },
          {
            "id": "evaluating-trig-expressions-lesson-3",
            "title": "Reciprocal Identities",
            "url": "https://www.youtube.com/watch?v=UeuuFqbTYgA",
            "youtubeId": "UeuuFqbTYgA"
          },
          {
            "id": "evaluating-trig-expressions-lesson-4",
            "title": "The Quotient Identities",
            "url": "https://www.youtube.com/watch?v=7PVKbyLFY5U",
            "youtubeId": "7PVKbyLFY5U"
          },
          {
            "id": "evaluating-trig-expressions-lesson-5",
            "title": "Even and Odd Trigonometric Identities",
            "url": "https://www.youtube.com/watch?v=5p8hokJ3Cqo",
            "youtubeId": "5p8hokJ3Cqo"
          },
          {
            "id": "evaluating-trig-expressions-lesson-6",
            "title": "Pythagorean Identities",
            "url": "https://www.youtube.com/watch?v=TpADRvW8zm8",
            "youtubeId": "TpADRvW8zm8"
          },
          {
            "id": "evaluating-trig-expressions-lesson-7",
            "title": "The Pythagorean Theorem",
            "url": "https://www.youtube.com/watch?v=pbf4lcJhIfI",
            "youtubeId": "pbf4lcJhIfI"
          },
          {
            "id": "evaluating-trig-expressions-lesson-8",
            "title": "Evaluating Trig Functions Using Periodic Properties",
            "url": "https://www.youtube.com/watch?v=8Z60_yXX4xA",
            "youtubeId": "8Z60_yXX4xA"
          },
          {
            "id": "evaluating-trig-expressions-lesson-9",
            "title": "Finding the Exact Values of Trig Functions",
            "url": "https://www.youtube.com/watch?v=bTdjcvm6pPo",
            "youtubeId": "bTdjcvm6pPo"
          },
          {
            "id": "evaluating-trig-expressions-lesson-10",
            "title": "Special Right Triangle Trigonometry - 30 60 90 Triangles",
            "url": "https://www.youtube.com/watch?v=p70UBGCHZrQ",
            "youtubeId": "p70UBGCHZrQ"
          },
          {
            "id": "evaluating-trig-expressions-lesson-11",
            "title": "Special Right Triangle Trigonometry - 45 45 90 Triangles",
            "url": "https://www.youtube.com/watch?v=xzMirNSv1d0",
            "youtubeId": "xzMirNSv1d0"
          },
          {
            "id": "evaluating-trig-expressions-lesson-12",
            "title": "Pythagorean Theorem - Special Patterns",
            "url": "https://www.youtube.com/watch?v=MeBcJPdjeI4",
            "youtubeId": "MeBcJPdjeI4"
          },
          {
            "id": "evaluating-trig-expressions-lesson-13",
            "title": "Cofunction Identities",
            "url": "https://www.youtube.com/watch?v=35fxto48HZY",
            "youtubeId": "35fxto48HZY"
          },
          {
            "id": "evaluating-trig-expressions-lesson-14",
            "title": "Angle of Elevation Word Problems",
            "url": "https://www.youtube.com/watch?v=uyKvSe6Ltgs",
            "youtubeId": "uyKvSe6Ltgs"
          },
          {
            "id": "evaluating-trig-expressions-lesson-15",
            "title": "Evaluating Trig Functions Given a Point on the Terminal Side",
            "url": "https://www.youtube.com/watch?v=P8rdY2ahkms",
            "youtubeId": "P8rdY2ahkms"
          },
          {
            "id": "evaluating-trig-expressions-lesson-16",
            "title": "A simple Trick to Remember Trig Values",
            "url": "https://www.youtube.com/watch?v=YDuPdLL9GGo",
            "youtubeId": "YDuPdLL9GGo"
          },
          {
            "id": "evaluating-trig-expressions-lesson-17",
            "title": "How to Find the Exact Value of the 5 Remaining Trig Functions",
            "url": "https://www.youtube.com/watch?v=H7GwDntpGUY",
            "youtubeId": "H7GwDntpGUY"
          },
          {
            "id": "evaluating-trig-expressions-lesson-18",
            "title": "How to Use Reference Angles to Evaluate Trig Functions",
            "url": "https://www.youtube.com/watch?v=V8LEHEzdU2U",
            "youtubeId": "V8LEHEzdU2U"
          },
          {
            "id": "evaluating-trig-expressions-lesson-19",
            "title": "Evaluating Inverse Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=jt7p-mCC0ng",
            "youtubeId": "jt7p-mCC0ng"
          }
        ]
      },
      {
        "id": "trigonometric-identities",
        "title": "Trigonometric Identities",
        "url": "https://www.video-tutor.net/trigonometric-identities.html",
        "lessons": [
          {
            "id": "trigonometric-identities-lesson-1",
            "title": "How to Graph Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=bm8oYKKlCXI",
            "youtubeId": "bm8oYKKlCXI"
          },
          {
            "id": "trigonometric-identities-lesson-3",
            "title": "How to Graph Trig Functions - More Examples!",
            "url": "https://www.youtube.com/watch?v=fo_q9mEAFp4",
            "youtubeId": "fo_q9mEAFp4"
          },
          {
            "id": "trigonometric-identities-lesson-4",
            "title": "Trig Identities",
            "url": "https://www.youtube.com/watch?v=m1OitPmkydY",
            "youtubeId": "m1OitPmkydY"
          },
          {
            "id": "trigonometric-identities-lesson-5",
            "title": "Verifying Trigonometric Identities",
            "url": "https://www.youtube.com/watch?v=Rf05H8ogHLg",
            "youtubeId": "Rf05H8ogHLg"
          },
          {
            "id": "trigonometric-identities-lesson-7",
            "title": "Sum and Difference Identities",
            "url": "https://www.youtube.com/watch?v=gEhxBFQCYic",
            "youtubeId": "gEhxBFQCYic"
          },
          {
            "id": "trigonometric-identities-lesson-8",
            "title": "Double Angle Identities",
            "url": "https://www.youtube.com/watch?v=SE5SBTgrwH8",
            "youtubeId": "SE5SBTgrwH8"
          },
          {
            "id": "trigonometric-identities-lesson-9",
            "title": "Verifying Trig Identities with Double Angle Formulas",
            "url": "https://www.youtube.com/watch?v=Wh7hM_FsN3Y",
            "youtubeId": "Wh7hM_FsN3Y"
          },
          {
            "id": "trigonometric-identities-lesson-10",
            "title": "Power Reducing Formulas",
            "url": "https://www.youtube.com/watch?v=U6yjjaK8aCc",
            "youtubeId": "U6yjjaK8aCc"
          },
          {
            "id": "trigonometric-identities-lesson-11",
            "title": "Half Angle Identities",
            "url": "https://www.youtube.com/watch?v=9YI69okba3c",
            "youtubeId": "9YI69okba3c"
          },
          {
            "id": "trigonometric-identities-lesson-12",
            "title": "Verifying Trig Identities Using Half Angle Formulas",
            "url": "https://www.youtube.com/watch?v=qWJ4HwJ_5LY",
            "youtubeId": "qWJ4HwJ_5LY"
          },
          {
            "id": "trigonometric-identities-lesson-13",
            "title": "Inverse Trig Functions with Double Angle and Half Angle Identities",
            "url": "https://www.youtube.com/watch?v=waDbbpib9cM",
            "youtubeId": "waDbbpib9cM"
          },
          {
            "id": "trigonometric-identities-lesson-14",
            "title": "Right Triangle Trigonometry with Half Angle Identities",
            "url": "https://www.youtube.com/watch?v=vEU25NlpaXA",
            "youtubeId": "vEU25NlpaXA"
          },
          {
            "id": "trigonometric-identities-lesson-15",
            "title": "Product to Sum and Sum to Product Formulas",
            "url": "https://www.youtube.com/watch?v=8Prc7VGt40w",
            "youtubeId": "8Prc7VGt40w"
          },
          {
            "id": "trigonometric-identities-lesson-16",
            "title": "Solving Trigonometric Equations by Finding All Solutions",
            "url": "https://www.youtube.com/watch?v=kEcbxiLeGTc",
            "youtubeId": "kEcbxiLeGTc"
          },
          {
            "id": "trigonometric-identities-lesson-17",
            "title": "Solving Trigonometric Equations with Multiple Angles",
            "url": "https://www.youtube.com/watch?v=eZPEW2hVUd0",
            "youtubeId": "eZPEW2hVUd0"
          },
          {
            "id": "trigonometric-identities-lesson-18",
            "title": "Solving Trigonometric Equations Using Double Angle Identities",
            "url": "https://www.youtube.com/watch?v=-R7394Dn854",
            "youtubeId": "-R7394Dn854"
          }
        ]
      },
      {
        "id": "trigonometric-applications",
        "title": "Applications of Trigonometry",
        "url": "https://www.video-tutor.net/trigonometric-applications.html",
        "lessons": [
          {
            "id": "trigonometric-applications-lesson-1",
            "title": "How to Calculate the Missing Side Length of a Triangle",
            "url": "https://www.youtube.com/watch?v=tielQ3ejh70",
            "youtubeId": "tielQ3ejh70"
          },
          {
            "id": "trigonometric-applications-lesson-2",
            "title": "How to Calculate the Missing Angle in a Triangle",
            "url": "https://www.youtube.com/watch?v=4Dv5IFqATrc",
            "youtubeId": "4Dv5IFqATrc"
          },
          {
            "id": "trigonometric-applications-lesson-3",
            "title": "How to Solve the Two Triangle Trigonometry Problem",
            "url": "https://www.youtube.com/watch?v=OTP885mApV8",
            "youtubeId": "OTP885mApV8"
          },
          {
            "id": "trigonometric-applications-lesson-4",
            "title": "Bearings and Directions - Trig Problem",
            "url": "https://www.youtube.com/watch?v=jyi5zW8mavs",
            "youtubeId": "jyi5zW8mavs"
          },
          {
            "id": "trigonometric-applications-lesson-5",
            "title": "Bearing and Navigation - Trig Problem",
            "url": "https://www.youtube.com/watch?v=cSKAqfGXOPI",
            "youtubeId": "cSKAqfGXOPI"
          },
          {
            "id": "trigonometric-applications-lesson-6",
            "title": "Solving the Two Triangle Problem - More Examples!",
            "url": "https://www.youtube.com/watch?v=QM1T6eL8t48",
            "youtubeId": "QM1T6eL8t48"
          },
          {
            "id": "trigonometric-applications-lesson-7",
            "title": "Introduction to the Law of Sines",
            "url": "https://www.youtube.com/watch?v=8qezAG2r0sk",
            "youtubeId": "8qezAG2r0sk"
          },
          {
            "id": "trigonometric-applications-lesson-8",
            "title": "Law of Sines - More Examples!",
            "url": "https://www.youtube.com/watch?v=9fS0uA4iLxI",
            "youtubeId": "9fS0uA4iLxI"
          },
          {
            "id": "trigonometric-applications-lesson-9",
            "title": "Finding the Area of an Oblique Triangle Using Heron's Formula",
            "url": "https://www.youtube.com/watch?v=vPt6j5e_uhE",
            "youtubeId": "vPt6j5e_uhE"
          },
          {
            "id": "trigonometric-applications-lesson-10",
            "title": "How to Calculate the Height of a Triangle Using Heron's Formula",
            "url": "https://www.youtube.com/watch?v=a1PR9O1Va84",
            "youtubeId": "a1PR9O1Va84"
          },
          {
            "id": "trigonometric-applications-lesson-11",
            "title": "Introduction to the Law of Cosines",
            "url": "https://www.youtube.com/watch?v=9CGY0s-uCUE",
            "youtubeId": "9CGY0s-uCUE"
          },
          {
            "id": "trigonometric-applications-lesson-12",
            "title": "Intro to Polar Coordinates",
            "url": "https://www.youtube.com/watch?v=aSdaT62ndYE",
            "youtubeId": "aSdaT62ndYE"
          },
          {
            "id": "trigonometric-applications-lesson-13",
            "title": "Polar Equations to Rectangular Equations",
            "url": "https://www.youtube.com/watch?v=flTz_pSzVFI",
            "youtubeId": "flTz_pSzVFI"
          },
          {
            "id": "trigonometric-applications-lesson-14",
            "title": "Rectangular Equations to Polar Equations",
            "url": "https://www.youtube.com/watch?v=fTBkr27r3pw",
            "youtubeId": "fTBkr27r3pw"
          },
          {
            "id": "trigonometric-applications-lesson-15",
            "title": "How to Graph Polar Equations",
            "url": "https://www.youtube.com/watch?v=jO4lwddfeDA",
            "youtubeId": "jO4lwddfeDA"
          },
          {
            "id": "trigonometric-applications-lesson-17",
            "title": "De Moivre's Theorem - Complex Numbers in Polar Form",
            "url": "https://www.youtube.com/watch?v=J6TnZxUUzqU",
            "youtubeId": "J6TnZxUUzqU"
          },
          {
            "id": "trigonometric-applications-lesson-19",
            "title": "Introduction to Vectors",
            "url": "https://www.youtube.com/watch?v=iXdMpXMuEGI",
            "youtubeId": "iXdMpXMuEGI"
          },
          {
            "id": "trigonometric-applications-lesson-21",
            "title": "The Dot Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=VzX8KJKFhlM",
            "youtubeId": "VzX8KJKFhlM"
          }
        ]
      },
      {
        "id": "trig-final-exam",
        "title": "Trig Final Exam Review",
        "url": "https://www.video-tutor.net/trig-final-exam.html",
        "lessons": [
          {
            "id": "trig-final-exam-lesson-1",
            "title": "20 Test Questions",
            "url": "https://www.youtube.com/watch?v=OAsbx4TEnL0",
            "youtubeId": "OAsbx4TEnL0"
          }
        ]
      },
    ]
  },
  {
    "id": "precalculus",
    "title": "Precalculus",
    "url": "https://www.video-tutor.net/precalculus.html",
    "chapters": [
      {
        "id": "functions",
        "title": "Functions",
        "url": "https://www.video-tutor.net/functions.html",
        "lessons": [
          {
            "id": "functions-lesson-1",
            "title": "What is a Function?",
            "url": "https://www.youtube.com/watch?v=7JZ0IfCQ488",
            "youtubeId": "7JZ0IfCQ488"
          },
          {
            "id": "functions-lesson-2",
            "title": "Evaluating Functions",
            "url": "https://www.youtube.com/watch?v=HyNie_PYgsY",
            "youtubeId": "HyNie_PYgsY"
          },
          {
            "id": "functions-lesson-3",
            "title": "Function Operations",
            "url": "https://www.youtube.com/watch?v=3gaxVHVI4cI",
            "youtubeId": "3gaxVHVI4cI"
          },
          {
            "id": "functions-lesson-4",
            "title": "Evaluating Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=OYOXMyFKotc",
            "youtubeId": "OYOXMyFKotc"
          },
          {
            "id": "functions-lesson-5",
            "title": "Graphing Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=Uzw9tsGq2Pw",
            "youtubeId": "Uzw9tsGq2Pw"
          },
          {
            "id": "functions-lesson-6",
            "title": "Increasing and Decreasing Functions",
            "url": "https://www.youtube.com/watch?v=EZeQxYg0zgg",
            "youtubeId": "EZeQxYg0zgg"
          },
          {
            "id": "functions-lesson-7",
            "title": "Identifying the Relative Maximum and Minimum Values",
            "url": "https://www.youtube.com/watch?v=GaltHJF6WyI",
            "youtubeId": "GaltHJF6WyI"
          },
          {
            "id": "functions-lesson-8",
            "title": "Finding the Domain and Range of a Function from a Graph",
            "url": "https://www.youtube.com/watch?v=KirGQOwjBVI",
            "youtubeId": "KirGQOwjBVI"
          },
          {
            "id": "functions-lesson-9",
            "title": "How to Find the Domain of a Function",
            "url": "https://www.youtube.com/watch?v=djT6-YamHaA",
            "youtubeId": "djT6-YamHaA"
          },
          {
            "id": "functions-lesson-10",
            "title": "How to Find the Range of a Function",
            "url": "https://www.youtube.com/watch?v=Si2vmzUWfJE",
            "youtubeId": "Si2vmzUWfJE"
          },
          {
            "id": "functions-lesson-11",
            "title": "The Difference Quotient",
            "url": "https://www.youtube.com/watch?v=qQgVomi8lCc",
            "youtubeId": "qQgVomi8lCc"
          },
          {
            "id": "functions-lesson-12",
            "title": "Function Operations",
            "url": "https://www.youtube.com/watch?v=3gaxVHVI4cI",
            "youtubeId": "3gaxVHVI4cI"
          },
          {
            "id": "functions-lesson-13",
            "title": "Composite Functions",
            "url": "https://www.youtube.com/watch?v=ZFPkQkURSxk",
            "youtubeId": "ZFPkQkURSxk"
          },
          {
            "id": "functions-lesson-14",
            "title": "How to Evaluate Composite Functions",
            "url": "https://www.youtube.com/watch?v=6vQxIG4lJ3w",
            "youtubeId": "6vQxIG4lJ3w"
          },
          {
            "id": "functions-lesson-15",
            "title": "Composition of Three Functions with a Data Table",
            "url": "https://www.youtube.com/watch?v=Ote1KvW6BXw",
            "youtubeId": "Ote1KvW6BXw"
          },
          {
            "id": "functions-lesson-16",
            "title": "Decomposing Functions",
            "url": "https://www.youtube.com/watch?v=NmfaC7etZms",
            "youtubeId": "NmfaC7etZms"
          },
          {
            "id": "functions-lesson-17",
            "title": "Even and Odd Functions",
            "url": "https://www.youtube.com/watch?v=fKyBOLsqRlo",
            "youtubeId": "fKyBOLsqRlo"
          },
          {
            "id": "functions-lesson-18",
            "title": "Linear Functions Review",
            "url": "https://www.youtube.com/watch?v=BtcKotD6Ni8",
            "youtubeId": "BtcKotD6Ni8"
          },
          {
            "id": "functions-lesson-19",
            "title": "Average Rate of Change of a Function",
            "url": "https://www.youtube.com/watch?v=f_Q0qlwlclQ",
            "youtubeId": "f_Q0qlwlclQ"
          },
          {
            "id": "functions-lesson-20",
            "title": "Introduction to Inverse Functions",
            "url": "https://www.youtube.com/watch?v=TN4ybFiuV3k",
            "youtubeId": "TN4ybFiuV3k"
          },
          {
            "id": "functions-lesson-21",
            "title": "How to Find the Inverse Function",
            "url": "https://www.youtube.com/watch?v=2zeYEx4eTdc",
            "youtubeId": "2zeYEx4eTdc"
          },
          {
            "id": "functions-lesson-22",
            "title": "How to Find the Domain of an Inverse Function",
            "url": "https://www.youtube.com/watch?v=wP4JjdFbCkY",
            "youtubeId": "wP4JjdFbCkY"
          },
          {
            "id": "functions-lesson-23",
            "title": "Verifying Inverse Functions",
            "url": "https://www.youtube.com/watch?v=6QamgSPprjA",
            "youtubeId": "6QamgSPprjA"
          },
          {
            "id": "functions-lesson-24",
            "title": "The Horizontal Line Test and One-to-One Functions",
            "url": "https://www.youtube.com/watch?v=6u9Qh1Vi_Qw",
            "youtubeId": "6u9Qh1Vi_Qw"
          },
          {
            "id": "functions-lesson-25",
            "title": "The Vertical Line Test",
            "url": "https://www.youtube.com/watch?v=Mxe2lX1htNk",
            "youtubeId": "Mxe2lX1htNk"
          },
          {
            "id": "functions-lesson-26",
            "title": "Evaluating Composite Inverse Functions",
            "url": "https://www.youtube.com/watch?v=GEgFmxxOJno",
            "youtubeId": "GEgFmxxOJno"
          },
          {
            "id": "functions-lesson-27",
            "title": "Graphing Inverse Functions",
            "url": "https://www.youtube.com/watch?v=ukEtad_aml4",
            "youtubeId": "ukEtad_aml4"
          },
          {
            "id": "functions-lesson-28",
            "title": "Transformations of Functions",
            "url": "https://www.youtube.com/watch?v=Tmdrjs9xufc",
            "youtubeId": "Tmdrjs9xufc"
          },
          {
            "id": "functions-lesson-32",
            "title": "Functions and Graphs",
            "url": "https://www.youtube.com/watch?v=kvU9sOzT2mk",
            "youtubeId": "kvU9sOzT2mk"
          }
        ]
      },
      {
        "id": "imaginary-numbers",
        "title": "Complex Numbers",
        "url": "https://www.video-tutor.net/imaginary-numbers.html",
        "lessons": [
          {
            "id": "imaginary-numbers-lesson-1",
            "title": "Introduction to Imaginary Numbers",
            "url": "https://www.youtube.com/watch?v=vRJqPo_zcnQ",
            "youtubeId": "vRJqPo_zcnQ"
          },
          {
            "id": "imaginary-numbers-lesson-2",
            "title": "How to Graph Complex Numbers",
            "url": "https://www.youtube.com/watch?v=BJ6b9t0ryhU",
            "youtubeId": "BJ6b9t0ryhU"
          },
          {
            "id": "imaginary-numbers-lesson-3",
            "title": "Absolute Value of Complex Numbers",
            "url": "https://www.youtube.com/watch?v=wmnQgD5oqQw",
            "youtubeId": "wmnQgD5oqQw"
          },
          {
            "id": "imaginary-numbers-lesson-4",
            "title": "Adding and Subtracting Complex Numbers",
            "url": "https://www.youtube.com/watch?v=qNNX79cnFyQ",
            "youtubeId": "qNNX79cnFyQ"
          },
          {
            "id": "imaginary-numbers-lesson-5",
            "title": "Multiplying Complex Numbers",
            "url": "https://www.youtube.com/watch?v=MzCS_8Rzja8",
            "youtubeId": "MzCS_8Rzja8"
          },
          {
            "id": "imaginary-numbers-lesson-6",
            "title": "Dividing Complex Numbers",
            "url": "https://www.youtube.com/watch?v=EfRRpVB62Ko",
            "youtubeId": "EfRRpVB62Ko"
          },
          {
            "id": "imaginary-numbers-lesson-7",
            "title": "Simplifying Complex Numbers",
            "url": "https://www.youtube.com/watch?v=XyksedEntD4",
            "youtubeId": "XyksedEntD4"
          },
          {
            "id": "imaginary-numbers-lesson-8",
            "title": "Solving Equations with Complex Numbers",
            "url": "https://www.youtube.com/watch?v=nRawKl7jP1M",
            "youtubeId": "nRawKl7jP1M"
          },
          {
            "id": "imaginary-numbers-lesson-10",
            "title": "Complex Numbers - Practice Problems",
            "url": "https://www.youtube.com/watch?v=y2wPAZwZTng",
            "youtubeId": "y2wPAZwZTng"
          },
          {
            "id": "imaginary-numbers-lesson-11",
            "title": "Complex Numbers - More Example Problems!",
            "url": "https://www.youtube.com/watch?v=OQz1ydBcQSA",
            "youtubeId": "OQz1ydBcQSA"
          },
          {
            "id": "imaginary-numbers-lesson-12",
            "title": "De Moivre's Theorem - Complex Numbers in Polar Form",
            "url": "https://www.youtube.com/watch?v=J6TnZxUUzqU",
            "youtubeId": "J6TnZxUUzqU"
          }
        ]
      },
      {
        "id": "quadratic-functions",
        "title": "Quadratic Functions",
        "url": "https://www.video-tutor.net/quadratic-functions.html",
        "lessons": [
          {
            "id": "quadratic-functions-lesson-1",
            "title": "How to Solve Simple Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=-KWsS2FZVTA",
            "youtubeId": "-KWsS2FZVTA"
          },
          {
            "id": "quadratic-functions-lesson-2",
            "title": "Solving Simple Quadratic Equations - More Examples!",
            "url": "https://www.youtube.com/watch?v=4sy4UomdpQg",
            "youtubeId": "4sy4UomdpQg"
          },
          {
            "id": "quadratic-functions-lesson-3",
            "title": "The Zero Product Property",
            "url": "https://www.youtube.com/watch?v=J7MjMM_mi4k",
            "youtubeId": "J7MjMM_mi4k"
          },
          {
            "id": "quadratic-functions-lesson-4",
            "title": "How to Solve Quadratic Equations by Factoring",
            "url": "https://www.youtube.com/watch?v=qeByhTF8WEw",
            "youtubeId": "qeByhTF8WEw"
          },
          {
            "id": "quadratic-functions-lesson-5",
            "title": "How to Solve Quadratic Equations Using the Quadratic Formula",
            "url": "https://www.youtube.com/watch?v=IlNAJl36-10",
            "youtubeId": "IlNAJl36-10"
          },
          {
            "id": "quadratic-functions-lesson-6",
            "title": "How to Factor Difficult Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=VG1luiL_INQ",
            "youtubeId": "VG1luiL_INQ"
          },
          {
            "id": "quadratic-functions-lesson-7",
            "title": "Solving Quadratic Equations by Completing the Square",
            "url": "https://www.youtube.com/watch?v=WOb25i8FBBw",
            "youtubeId": "WOb25i8FBBw"
          },
          {
            "id": "quadratic-functions-lesson-8",
            "title": "How to Prove the Quadratic Formula by Completing the Square",
            "url": "https://www.youtube.com/watch?v=ApzMwQ2yfUE",
            "youtubeId": "ApzMwQ2yfUE"
          },
          {
            "id": "quadratic-functions-lesson-9",
            "title": "Solving Quadratic Equations with Imaginary Numbers",
            "url": "https://www.youtube.com/watch?v=83WrPCagHRg",
            "youtubeId": "83WrPCagHRg"
          },
          {
            "id": "quadratic-functions-lesson-10",
            "title": "Solving Equations in Quadratic Form Using Substitution",
            "url": "https://www.youtube.com/watch?v=eWjixwGK3YM",
            "youtubeId": "eWjixwGK3YM"
          },
          {
            "id": "quadratic-functions-lesson-11",
            "title": "The Discriminant of a Quadratic Equation",
            "url": "https://www.youtube.com/watch?v=6fU9ZgwbU74",
            "youtubeId": "6fU9ZgwbU74"
          },
          {
            "id": "quadratic-functions-lesson-12",
            "title": "Writing Quadratic Equations Given the Solutions",
            "url": "https://www.youtube.com/watch?v=SB6eCyG4GEA",
            "youtubeId": "SB6eCyG4GEA"
          },
          {
            "id": "quadratic-functions-lesson-13",
            "title": "Writing Quadratic Equations Given the Points and Y-intercept",
            "url": "https://www.youtube.com/watch?v=pN44X-V7Sck",
            "youtubeId": "pN44X-V7Sck"
          },
          {
            "id": "quadratic-functions-lesson-14",
            "title": "Writing Quadratic Equations Given the Sum and Product of Roots",
            "url": "https://www.youtube.com/watch?v=jd3dmr6cVf8",
            "youtubeId": "jd3dmr6cVf8"
          },
          {
            "id": "quadratic-functions-lesson-15",
            "title": "Finding the Sum and Product of the Roots",
            "url": "https://www.youtube.com/watch?v=kBSj35rik8w",
            "youtubeId": "kBSj35rik8w"
          },
          {
            "id": "quadratic-functions-lesson-16",
            "title": "Standard Form to Vertex Form",
            "url": "https://www.youtube.com/watch?v=pf9LkX8hpTQ",
            "youtubeId": "pf9LkX8hpTQ"
          },
          {
            "id": "quadratic-functions-lesson-17",
            "title": "The Intercept Form of a Quadratic Equation",
            "url": "https://www.youtube.com/watch?v=wtPOz0CHSUk",
            "youtubeId": "wtPOz0CHSUk"
          },
          {
            "id": "quadratic-functions-lesson-18",
            "title": "Quadratic Equations - Formulas and Notes",
            "url": "https://www.youtube.com/watch?v=aLMcf8HMl4U",
            "youtubeId": "aLMcf8HMl4U"
          },
          {
            "id": "quadratic-functions-lesson-19",
            "title": "Graphing Quadratic Functions Using Transformations",
            "url": "https://www.youtube.com/watch?v=H8OQtxSRe_k",
            "youtubeId": "H8OQtxSRe_k"
          },
          {
            "id": "quadratic-functions-lesson-20",
            "title": "How to Find the Vertex of a Parabola",
            "url": "https://www.youtube.com/watch?v=qsA3e5lGwKo",
            "youtubeId": "qsA3e5lGwKo"
          },
          {
            "id": "quadratic-functions-lesson-21",
            "title": "How to Find the Axis of Symmetry",
            "url": "https://www.youtube.com/watch?v=tyzd4VujaqY",
            "youtubeId": "tyzd4VujaqY"
          },
          {
            "id": "quadratic-functions-lesson-22",
            "title": "Graphing Quadratic Functions Using a Data Table",
            "url": "https://www.youtube.com/watch?v=TJNonQWYjkI",
            "youtubeId": "TJNonQWYjkI"
          },
          {
            "id": "quadratic-functions-lesson-23",
            "title": "Graphing Quadratic Functions in Vertex Form",
            "url": "https://www.youtube.com/watch?v=OHH7fX_M8Ns",
            "youtubeId": "OHH7fX_M8Ns"
          },
          {
            "id": "quadratic-functions-lesson-24",
            "title": "Graphing Quadratic Functions in Standard Form",
            "url": "https://www.youtube.com/watch?v=uYNKJWFYh7k",
            "youtubeId": "uYNKJWFYh7k"
          },
          {
            "id": "quadratic-functions-lesson-25",
            "title": "Graphing Quadratic Functions in Intercept Form",
            "url": "https://www.youtube.com/watch?v=D5Iv3qbzl2k",
            "youtubeId": "D5Iv3qbzl2k"
          },
          {
            "id": "quadratic-functions-lesson-26",
            "title": "Maximum and Minimum Value Word Problems",
            "url": "https://www.youtube.com/watch?v=d5YktqR-4FU",
            "youtubeId": "d5YktqR-4FU"
          },
          {
            "id": "quadratic-functions-lesson-27",
            "title": "Writing Quadratic Functions Given the Graph",
            "url": "https://www.youtube.com/watch?v=WadV9GNRd_0",
            "youtubeId": "WadV9GNRd_0"
          },
          {
            "id": "quadratic-functions-lesson-28",
            "title": "Solving Systems of Quadratic Equations",
            "url": "https://www.youtube.com/watch?v=rq5AjFs95qw",
            "youtubeId": "rq5AjFs95qw"
          },
          {
            "id": "quadratic-functions-lesson-29",
            "title": "Solving Systems of Nonlinear Equations",
            "url": "https://www.youtube.com/watch?v=JPdLEaxlnZQ",
            "youtubeId": "JPdLEaxlnZQ"
          },
          {
            "id": "quadratic-functions-lesson-30",
            "title": "How to Solve Quadratic Inequalities",
            "url": "https://www.youtube.com/watch?v=_gWjLKsFOPE",
            "youtubeId": "_gWjLKsFOPE"
          },
          {
            "id": "quadratic-functions-lesson-31",
            "title": "Solving a System of Quadratic Inequalities",
            "url": "https://www.youtube.com/watch?v=kqIhCU2zZ8A",
            "youtubeId": "kqIhCU2zZ8A"
          },
          {
            "id": "quadratic-functions-lesson-33",
            "title": "Multiple Choice Practice Problems",
            "url": "https://www.youtube.com/watch?v=fFFA7Q4eVuY",
            "youtubeId": "fFFA7Q4eVuY"
          }
        ]
      },
      {
        "id": "polynomial-functions",
        "title": "Polynomial Functions",
        "url": "https://www.video-tutor.net/polynomial-functions.html",
        "lessons": [
          {
            "id": "polynomial-functions-lesson-1",
            "title": "Classifying Monomials, Binomials, and Trinomials",
            "url": "https://www.youtube.com/watch?v=Rxx4HepHI_E",
            "youtubeId": "Rxx4HepHI_E"
          },
          {
            "id": "polynomial-functions-lesson-2",
            "title": "How to Find the Degree of a Polynomial",
            "url": "https://www.youtube.com/watch?v=cADQ4Wk4wFc",
            "youtubeId": "cADQ4Wk4wFc"
          },
          {
            "id": "polynomial-functions-lesson-3",
            "title": "Adding, Subtracting, Multiplying, & Dividing Polynomials",
            "url": "https://www.youtube.com/watch?v=ZvL9aDGNHqA",
            "youtubeId": "ZvL9aDGNHqA"
          },
          {
            "id": "polynomial-functions-lesson-4",
            "title": "Dividing Polynomials by Monomials and Binomials",
            "url": "https://www.youtube.com/watch?v=KyHXWAp7UGo",
            "youtubeId": "KyHXWAp7UGo"
          },
          {
            "id": "polynomial-functions-lesson-5",
            "title": "Long Division with Polynomials",
            "url": "https://www.youtube.com/watch?v=_FSXJmESFmQ",
            "youtubeId": "_FSXJmESFmQ"
          },
          {
            "id": "polynomial-functions-lesson-6",
            "title": "How to Factor Polynomials",
            "url": "https://www.youtube.com/watch?v=U6FndtdgpcA",
            "youtubeId": "U6FndtdgpcA"
          },
          {
            "id": "polynomial-functions-lesson-7",
            "title": "Synthetic Division of Polynomials",
            "url": "https://www.youtube.com/watch?v=FxHWoUOq2iQ",
            "youtubeId": "FxHWoUOq2iQ"
          },
          {
            "id": "polynomial-functions-lesson-8",
            "title": "The Remainder Theorem",
            "url": "https://www.youtube.com/watch?v=p1lSRAeEMR0",
            "youtubeId": "p1lSRAeEMR0"
          },
          {
            "id": "polynomial-functions-lesson-9",
            "title": "The Factor Theorem",
            "url": "https://www.youtube.com/watch?v=zAGP46nR6-0",
            "youtubeId": "zAGP46nR6-0"
          },
          {
            "id": "polynomial-functions-lesson-10",
            "title": "Finding the Zeros of a Polynomial Function - Rational Zero Theorem",
            "url": "https://www.youtube.com/watch?v=Iaq7z7reznM",
            "youtubeId": "Iaq7z7reznM"
          },
          {
            "id": "polynomial-functions-lesson-11",
            "title": "Solving Polynomial Equations - More Problems!",
            "url": "https://www.youtube.com/watch?v=ZaXaBcZxhq4",
            "youtubeId": "ZaXaBcZxhq4"
          },
          {
            "id": "polynomial-functions-lesson-12",
            "title": "Solving Polynomial Equations with Excel",
            "url": "https://www.youtube.com/watch?v=lomAl6XB_SM",
            "youtubeId": "lomAl6XB_SM"
          },
          {
            "id": "polynomial-functions-lesson-13",
            "title": "How to Find the Real and Imaginary Solutions of a Polynomial",
            "url": "https://www.youtube.com/watch?v=tRrPfxR5h-w",
            "youtubeId": "tRrPfxR5h-w"
          },
          {
            "id": "polynomial-functions-lesson-14",
            "title": "Descartes Rule of Signs",
            "url": "https://www.youtube.com/watch?v=YaU5JTe3cPU",
            "youtubeId": "YaU5JTe3cPU"
          },
          {
            "id": "polynomial-functions-lesson-15",
            "title": "Solving Polynomial Inequalities",
            "url": "https://www.youtube.com/watch?v=Fd5ys4PQ-aM",
            "youtubeId": "Fd5ys4PQ-aM"
          },
          {
            "id": "polynomial-functions-lesson-16",
            "title": "Writing Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=vu0JmblDgog",
            "youtubeId": "vu0JmblDgog"
          },
          {
            "id": "polynomial-functions-lesson-17",
            "title": "Graphing Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=a5x4lwnvHM0",
            "youtubeId": "a5x4lwnvHM0"
          },
          {
            "id": "polynomial-functions-lesson-18",
            "title": "How to Find the Polynomial Function from a Graph",
            "url": "https://www.youtube.com/watch?v=bb0seGYHUiQ",
            "youtubeId": "bb0seGYHUiQ"
          },
          {
            "id": "polynomial-functions-lesson-19",
            "title": "The Intermediate Value Theorem",
            "url": "https://www.youtube.com/watch?v=9wEHwFrUyOU",
            "youtubeId": "9wEHwFrUyOU"
          }
        ]
      },
      {
        "id": "rational-function",
        "title": "Rational Functions",
        "url": "https://www.video-tutor.net/rational-function.html",
        "lessons": [
          {
            "id": "rational-function-lesson-1",
            "title": "Introduction to Reciprocal Functions",
            "url": "https://www.youtube.com/watch?v=MK_Cep8C3g0",
            "youtubeId": "MK_Cep8C3g0"
          },
          {
            "id": "rational-function-lesson-2",
            "title": "Domain and Range of Reciprocal Functions",
            "url": "https://www.youtube.com/watch?v=gTm-n2yep8E",
            "youtubeId": "gTm-n2yep8E"
          },
          {
            "id": "rational-function-lesson-3",
            "title": "How to Graph Rational Functions",
            "url": "https://www.youtube.com/watch?v=bWVhwYdSnfk",
            "youtubeId": "bWVhwYdSnfk"
          },
          {
            "id": "rational-function-lesson-4",
            "title": "How to Find the Vertical Asymptote of a Function",
            "url": "https://www.youtube.com/watch?v=cjXseEPP9vc",
            "youtubeId": "cjXseEPP9vc"
          },
          {
            "id": "rational-function-lesson-5",
            "title": "Horizontal and Slant Asymptotes",
            "url": "https://www.youtube.com/watch?v=kvhpu1TkSjI",
            "youtubeId": "kvhpu1TkSjI"
          },
          {
            "id": "rational-function-lesson-6",
            "title": "How to Find a Rational Function Given Two Points",
            "url": "https://www.youtube.com/watch?v=ODs3t1vX1GY",
            "youtubeId": "ODs3t1vX1GY"
          },
          {
            "id": "rational-function-lesson-7",
            "title": "How to Find the X and Y Intercepts of a Rational Function",
            "url": "https://www.youtube.com/watch?v=ebpEDR4-Q3Y",
            "youtubeId": "ebpEDR4-Q3Y"
          },
          {
            "id": "rational-function-lesson-8",
            "title": "How to Graph Advanced Rational Functions",
            "url": "https://www.youtube.com/watch?v=GxynsEIvjRA",
            "youtubeId": "GxynsEIvjRA"
          },
          {
            "id": "rational-function-lesson-9",
            "title": "Rational Inequalities",
            "url": "https://www.youtube.com/watch?v=gfnVHwhEe6U",
            "youtubeId": "gfnVHwhEe6U"
          },
          {
            "id": "rational-function-lesson-10",
            "title": "Direct, Inverse, and Joint Variation Word Problems",
            "url": "https://www.youtube.com/watch?v=AMzCEcsd09o",
            "youtubeId": "AMzCEcsd09o"
          }
        ]
      },
      {
        "id": "logarithmic-functions",
        "title": "Logarithms",
        "url": "https://www.video-tutor.net/logarithmic-functions.html",
        "lessons": [
          {
            "id": "logarithmic-functions-lesson-1",
            "title": "Evaluating Logarithms",
            "url": "https://www.youtube.com/watch?v=kqVpPSzkTYA",
            "youtubeId": "kqVpPSzkTYA"
          },
          {
            "id": "logarithmic-functions-lesson-2",
            "title": "Converting Logarithmic Equations to Exponential Form",
            "url": "https://www.youtube.com/watch?v=f0C1KL7GkqY",
            "youtubeId": "f0C1KL7GkqY"
          },
          {
            "id": "logarithmic-functions-lesson-3",
            "title": "Change of Base Formula",
            "url": "https://www.youtube.com/watch?v=FFm-zaFW_X4",
            "youtubeId": "FFm-zaFW_X4"
          },
          {
            "id": "logarithmic-functions-lesson-4",
            "title": "Change of Base Formula - Example Problem",
            "url": "https://www.youtube.com/watch?v=p7hD9VdXv9U",
            "youtubeId": "p7hD9VdXv9U"
          },
          {
            "id": "logarithmic-functions-lesson-5",
            "title": "Properties of Logarithms",
            "url": "https://www.youtube.com/watch?v=Jtv9Lnf7Zw8",
            "youtubeId": "Jtv9Lnf7Zw8"
          },
          {
            "id": "logarithmic-functions-lesson-6",
            "title": "Expanding Logarithmic Expressions",
            "url": "https://www.youtube.com/watch?v=OIz-5MyJA3g",
            "youtubeId": "OIz-5MyJA3g"
          },
          {
            "id": "logarithmic-functions-lesson-7",
            "title": "Condensing Logarithmic Expressions",
            "url": "https://www.youtube.com/watch?v=luRrOlsB4cY",
            "youtubeId": "luRrOlsB4cY"
          },
          {
            "id": "logarithmic-functions-lesson-8",
            "title": "Natural Logarithms",
            "url": "https://www.youtube.com/watch?v=daUlTsnCNRQ",
            "youtubeId": "daUlTsnCNRQ"
          },
          {
            "id": "logarithmic-functions-lesson-9",
            "title": "Solving Exponential Equations",
            "url": "https://www.youtube.com/watch?v=9tutJ5xrRwg",
            "youtubeId": "9tutJ5xrRwg"
          },
          {
            "id": "logarithmic-functions-lesson-10",
            "title": "Solving Exponential Equations in Quadratic Form",
            "url": "https://www.youtube.com/watch?v=yNgmVu0R_T8",
            "youtubeId": "yNgmVu0R_T8"
          },
          {
            "id": "logarithmic-functions-lesson-11",
            "title": "Solving Exponential Equations with the Quadratic Formula",
            "url": "https://www.youtube.com/watch?v=1_XHAzgUi1o",
            "youtubeId": "1_XHAzgUi1o"
          },
          {
            "id": "logarithmic-functions-lesson-12",
            "title": "Solving Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=fnhFneOz6n8",
            "youtubeId": "fnhFneOz6n8"
          },
          {
            "id": "logarithmic-functions-lesson-13",
            "title": "Solving Difficult Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=PIx0Z0LqqFY",
            "youtubeId": "PIx0Z0LqqFY"
          },
          {
            "id": "logarithmic-functions-lesson-14",
            "title": "Solving Logarithmic Equations with Different Bases",
            "url": "https://www.youtube.com/watch?v=XvwPB21Gm9A",
            "youtubeId": "XvwPB21Gm9A"
          },
          {
            "id": "logarithmic-functions-lesson-15",
            "title": "Graphing Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=-nptxS9rZNA",
            "youtubeId": "-nptxS9rZNA"
          },
          {
            "id": "logarithmic-functions-lesson-16",
            "title": "Graphing Exponential Functions",
            "url": "https://www.youtube.com/watch?v=DASfP8KAyvs",
            "youtubeId": "DASfP8KAyvs"
          },
          {
            "id": "logarithmic-functions-lesson-17",
            "title": "Graphing Natural Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=ymXD6xCmzJE",
            "youtubeId": "ymXD6xCmzJE"
          },
          {
            "id": "logarithmic-functions-lesson-18",
            "title": "Compound Interest Problems",
            "url": "https://www.youtube.com/watch?v=Hn0eLcOSQGw",
            "youtubeId": "Hn0eLcOSQGw"
          },
          {
            "id": "logarithmic-functions-lesson-19",
            "title": "Interest Compounded Continuously Problems",
            "url": "https://www.youtube.com/watch?v=Ln97Hd7AiDc",
            "youtubeId": "Ln97Hd7AiDc"
          },
          {
            "id": "logarithmic-functions-lesson-20",
            "title": "Compound Interest and Population Growth Word Problems",
            "url": "https://www.youtube.com/watch?v=k4LLdFFLRmQ",
            "youtubeId": "k4LLdFFLRmQ"
          },
          {
            "id": "logarithmic-functions-lesson-21",
            "title": "Exponential Growth and Decay Word Problems",
            "url": "https://www.youtube.com/watch?v=e5nwJKUc3bA",
            "youtubeId": "e5nwJKUc3bA"
          },
          {
            "id": "logarithmic-functions-lesson-22",
            "title": "Solving Exponential Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=6CrXFvvwsaE",
            "youtubeId": "6CrXFvvwsaE"
          },
          {
            "id": "logarithmic-functions-lesson-23",
            "title": "Logarithms and Euler's Number",
            "url": "https://www.youtube.com/watch?v=pDFcu_wLOzo",
            "youtubeId": "pDFcu_wLOzo"
          },
          {
            "id": "logarithmic-functions-lesson-24",
            "title": "Proving Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=I9tWTx9xcuc",
            "youtubeId": "I9tWTx9xcuc"
          },
          {
            "id": "logarithmic-functions-lesson-25",
            "title": "Finding the Inverse of a Logarithmic Function",
            "url": "https://www.youtube.com/watch?v=hNsvGz7JPJQ",
            "youtubeId": "hNsvGz7JPJQ"
          },
          {
            "id": "logarithmic-functions-lesson-26",
            "title": "The Logistic Growth Function",
            "url": "https://www.youtube.com/watch?v=JgMvB22XQs0",
            "youtubeId": "JgMvB22XQs0"
          },
          {
            "id": "logarithmic-functions-lesson-27",
            "title": "Newton's Law of Cooling",
            "url": "https://www.youtube.com/watch?v=ejEXSjdMpck",
            "youtubeId": "ejEXSjdMpck"
          },
          {
            "id": "logarithmic-functions-lesson-29",
            "title": "Logarithmic Practice Problems",
            "url": "https://www.youtube.com/watch?v=7DVbQKI600k",
            "youtubeId": "7DVbQKI600k"
          }
        ]
      },
      {
        "id": "vectors",
        "title": "Vectors",
        "url": "https://www.video-tutor.net/vectors.html",
        "lessons": [
          {
            "id": "vectors-lesson-1",
            "title": "Scalars and Vectors",
            "url": "https://www.youtube.com/watch?v=rcDXQ-5H8mk",
            "youtubeId": "rcDXQ-5H8mk"
          },
          {
            "id": "vectors-lesson-2",
            "title": "Introduction to Vectors",
            "url": "https://www.youtube.com/watch?v=iXdMpXMuEGI",
            "youtubeId": "iXdMpXMuEGI"
          },
          {
            "id": "vectors-lesson-3",
            "title": "Adding and Subtracting Vectors",
            "url": "https://www.youtube.com/watch?v=DxwT7fn6GtE",
            "youtubeId": "DxwT7fn6GtE"
          },
          {
            "id": "vectors-lesson-4",
            "title": "Scalar Multiplication of Vectors",
            "url": "https://www.youtube.com/watch?v=g14-ACo5vnc",
            "youtubeId": "g14-ACo5vnc"
          },
          {
            "id": "vectors-lesson-5",
            "title": "How to Find the Unit Vector",
            "url": "https://www.youtube.com/watch?v=f5DHYCKyVRo",
            "youtubeId": "f5DHYCKyVRo"
          },
          {
            "id": "vectors-lesson-6",
            "title": "The Dot Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=VzX8KJKFhlM",
            "youtubeId": "VzX8KJKFhlM"
          },
          {
            "id": "vectors-lesson-7",
            "title": "Finding the Angle Between Two Vectors",
            "url": "https://www.youtube.com/watch?v=dYPRYO8QhxU",
            "youtubeId": "dYPRYO8QhxU"
          },
          {
            "id": "vectors-lesson-8",
            "title": "Are the Two Vectors Parallel, Orthogonal, or Neither?",
            "url": "https://www.youtube.com/watch?v=8fIZ2v-33xw",
            "youtubeId": "8fIZ2v-33xw"
          },
          {
            "id": "vectors-lesson-9",
            "title": "The Cross Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=pWbOisq1MJU",
            "youtubeId": "pWbOisq1MJU"
          },
          {
            "id": "vectors-lesson-10",
            "title": "Vector Projections",
            "url": "https://www.youtube.com/watch?v=Rw70zkvqEiE",
            "youtubeId": "Rw70zkvqEiE"
          },
          {
            "id": "vectors-lesson-11",
            "title": "The Standard Unit Vectors - i j k",
            "url": "https://www.youtube.com/watch?v=IBNNbzStDLE",
            "youtubeId": "IBNNbzStDLE"
          },
          {
            "id": "vectors-lesson-12",
            "title": "Vector Formulas",
            "url": "https://www.youtube.com/watch?v=SdsrCuCuh1U",
            "youtubeId": "SdsrCuCuh1U"
          },
          {
            "id": "vectors-lesson-13",
            "title": "Finding the Area of a Parallelogram Using Vectors",
            "url": "https://www.youtube.com/watch?v=YbZmAqGUkqc",
            "youtubeId": "YbZmAqGUkqc"
          },
          {
            "id": "vectors-lesson-14",
            "title": "Vectors - More Practice Problems!",
            "url": "https://www.youtube.com/watch?v=2_21erD-nBg",
            "youtubeId": "2_21erD-nBg"
          }
        ]
      },
      {
        "id": "system-of-equations",
        "title": "Systems of Equations",
        "url": "https://www.video-tutor.net/system-of-equations.html",
        "lessons": [
          {
            "id": "system-of-equations-lesson-1",
            "title": "How to Determine if an Ordered Pair is a Solution",
            "url": "https://www.youtube.com/watch?v=QfWJDQrj4kU",
            "youtubeId": "QfWJDQrj4kU"
          },
          {
            "id": "system-of-equations-lesson-2",
            "title": "Solving Systems of Equations With 2 Variables",
            "url": "https://www.youtube.com/watch?v=oKqtgz2eo-Y",
            "youtubeId": "oKqtgz2eo-Y"
          },
          {
            "id": "system-of-equations-lesson-3",
            "title": "Systems of Equations With 2 Variables - More Examples!",
            "url": "https://www.youtube.com/watch?v=cblHUeq3bkE",
            "youtubeId": "cblHUeq3bkE"
          },
          {
            "id": "system-of-equations-lesson-4",
            "title": "Solving Systems of Equations with Fractions and Decimals",
            "url": "https://www.youtube.com/watch?v=jlddJQ1qYDU",
            "youtubeId": "jlddJQ1qYDU"
          },
          {
            "id": "system-of-equations-lesson-5",
            "title": "One Solution, No Solution, or Infinitely Many Solutions?",
            "url": "https://www.youtube.com/watch?v=bq5gDsEdN3Q",
            "youtubeId": "bq5gDsEdN3Q"
          },
          {
            "id": "system-of-equations-lesson-6",
            "title": "Solving Systems of Equations by Graphing",
            "url": "https://www.youtube.com/watch?v=Pd4hwS8qHms",
            "youtubeId": "Pd4hwS8qHms"
          },
          {
            "id": "system-of-equations-lesson-7",
            "title": "Solving Systems of Equations with 3 Variables",
            "url": "https://www.youtube.com/watch?v=0JQeo0yC9OQ",
            "youtubeId": "0JQeo0yC9OQ"
          },
          {
            "id": "system-of-equations-lesson-8",
            "title": "System of Equations - Word Problem",
            "url": "https://www.youtube.com/watch?v=YgtidDkjJ9M",
            "youtubeId": "YgtidDkjJ9M"
          },
          {
            "id": "system-of-equations-lesson-9",
            "title": "How to Solve Systems of Nonlinear Equations",
            "url": "https://www.youtube.com/watch?v=JPdLEaxlnZQ",
            "youtubeId": "JPdLEaxlnZQ"
          },
          {
            "id": "system-of-equations-lesson-10",
            "title": "Graphing Systems of Linear Inequalities",
            "url": "https://www.youtube.com/watch?v=FWbcKade3rw",
            "youtubeId": "FWbcKade3rw"
          },
          {
            "id": "system-of-equations-lesson-11",
            "title": "Linear Programming",
            "url": "https://www.youtube.com/watch?v=Bzzqx1F23a8",
            "youtubeId": "Bzzqx1F23a8"
          },
          {
            "id": "system-of-equations-lesson-12",
            "title": "Partial Fraction Decomposition",
            "url": "https://www.youtube.com/watch?v=QKkdYW77xNI",
            "youtubeId": "QKkdYW77xNI"
          }
        ]
      },
      {
        "id": "matrix",
        "title": "Matrices",
        "url": "https://www.video-tutor.net/matrix.html",
        "lessons": [
          {
            "id": "matrix-lesson-1",
            "title": "Introduction to Matrices",
            "url": "https://www.youtube.com/watch?v=yRwQ7A6jVLk",
            "youtubeId": "yRwQ7A6jVLk"
          },
          {
            "id": "matrix-lesson-2",
            "title": "Adding and Subtracting Matrices",
            "url": "https://www.youtube.com/watch?v=QXUbFzEd3Ww",
            "youtubeId": "QXUbFzEd3Ww"
          },
          {
            "id": "matrix-lesson-3",
            "title": "Scalar Multiplication of Matrices",
            "url": "https://www.youtube.com/watch?v=iJERwUVuwtY",
            "youtubeId": "iJERwUVuwtY"
          },
          {
            "id": "matrix-lesson-4",
            "title": "Solving Matrix Equations",
            "url": "https://www.youtube.com/watch?v=UHhvcj0doaA",
            "youtubeId": "UHhvcj0doaA"
          },
          {
            "id": "matrix-lesson-5",
            "title": "How to Multiply Matrices",
            "url": "https://www.youtube.com/watch?v=vzt9c7iWPxs",
            "youtubeId": "vzt9c7iWPxs"
          },
          {
            "id": "matrix-lesson-6",
            "title": "Multiplying Matrices - More Examples!",
            "url": "https://www.youtube.com/watch?v=2spTnAiQg4M",
            "youtubeId": "2spTnAiQg4M"
          },
          {
            "id": "matrix-lesson-7",
            "title": "Elementary Row Operations",
            "url": "https://www.youtube.com/watch?v=9PNCjHemIhI",
            "youtubeId": "9PNCjHemIhI"
          },
          {
            "id": "matrix-lesson-8",
            "title": "Gaussian Elimination",
            "url": "https://www.youtube.com/watch?v=eDb6iugi6Uk",
            "youtubeId": "eDb6iugi6Uk"
          },
          {
            "id": "matrix-lesson-9",
            "title": "Gauss Jordan Elimination",
            "url": "https://www.youtube.com/watch?v=eYSASx8_nyg",
            "youtubeId": "eYSASx8_nyg"
          },
          {
            "id": "matrix-lesson-10",
            "title": "Gaussian Elimination with 4 Variables",
            "url": "https://www.youtube.com/watch?v=4VAXv6yRULU",
            "youtubeId": "4VAXv6yRULU"
          },
          {
            "id": "matrix-lesson-11",
            "title": "Inverse of a 2x2 Matrix",
            "url": "https://www.youtube.com/watch?v=aiBgjz5xbyg",
            "youtubeId": "aiBgjz5xbyg"
          },
          {
            "id": "matrix-lesson-12",
            "title": "Inverse of a 3x3 Matrix",
            "url": "https://www.youtube.com/watch?v=Fg7_mv3izR0",
            "youtubeId": "Fg7_mv3izR0"
          },
          {
            "id": "matrix-lesson-13",
            "title": "Determinants of 2x2 Matrices",
            "url": "https://www.youtube.com/watch?v=3ROzG6n4yMc",
            "youtubeId": "3ROzG6n4yMc"
          },
          {
            "id": "matrix-lesson-14",
            "title": "Determinant of a 3x3 Matrix",
            "url": "https://www.youtube.com/watch?v=eYjSu_xXUUQ",
            "youtubeId": "eYjSu_xXUUQ"
          },
          {
            "id": "matrix-lesson-15",
            "title": "Finding the Determinant of a 3x3 Matrix - The Easy Way!",
            "url": "https://www.youtube.com/watch?v=z5Yf7QwrotE",
            "youtubeId": "z5Yf7QwrotE"
          },
          {
            "id": "matrix-lesson-16",
            "title": "Determinant of a 4x4 Matrix",
            "url": "https://www.youtube.com/watch?v=fWzUwrt1Z0s",
            "youtubeId": "fWzUwrt1Z0s"
          },
          {
            "id": "matrix-lesson-17",
            "title": "Using Cramer's Rule to Solve a 2x2 Linear System",
            "url": "https://www.youtube.com/watch?v=vXqlIOX2itM",
            "youtubeId": "vXqlIOX2itM"
          },
          {
            "id": "matrix-lesson-18",
            "title": "Using Cramer's Rule to Solve a 3x3 Linear System",
            "url": "https://www.youtube.com/watch?v=Ot87qLTODdQ",
            "youtubeId": "Ot87qLTODdQ"
          },
          {
            "id": "matrix-lesson-19",
            "title": "Finding the Area of a Triangle Using Matrices & Determinants",
            "url": "https://www.youtube.com/watch?v=IvmQvWJ8nMM",
            "youtubeId": "IvmQvWJ8nMM"
          }
        ]
      },
      {
        "id": "sequences-and-series",
        "title": "Sequences and Series",
        "url": "https://www.video-tutor.net/sequences-and-series.html",
        "lessons": [
          {
            "id": "sequences-and-series-lesson-1",
            "title": "How to Find the Nth Term of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=PStn9zHgXHU",
            "youtubeId": "PStn9zHgXHU"
          },
          {
            "id": "sequences-and-series-lesson-2",
            "title": "Writing a General Formula of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=UPvyQV6wZQw",
            "youtubeId": "UPvyQV6wZQw"
          },
          {
            "id": "sequences-and-series-lesson-3",
            "title": "Writing the First 4 Terms of an Arithmetic Sequence",
            "url": "https://www.youtube.com/watch?v=VGaUKSuaQMw",
            "youtubeId": "VGaUKSuaQMw"
          },
          {
            "id": "sequences-and-series-lesson-4",
            "title": "Recursive Formulas of Sequences",
            "url": "https://www.youtube.com/watch?v=IFHZQ6MaG6w",
            "youtubeId": "IFHZQ6MaG6w"
          },
          {
            "id": "sequences-and-series-lesson-5",
            "title": "How to Find the Sum of an Arithmetic Series",
            "url": "https://www.youtube.com/watch?v=JH0MsP_48ic",
            "youtubeId": "JH0MsP_48ic"
          },
          {
            "id": "sequences-and-series-lesson-6",
            "title": "How to Derive the Formula for the Sum of an Arithmetic Series",
            "url": "https://www.youtube.com/watch?v=SXRQcxt6jsk",
            "youtubeId": "SXRQcxt6jsk"
          },
          {
            "id": "sequences-and-series-lesson-7",
            "title": "Sigma and Summation Notation",
            "url": "https://www.youtube.com/watch?v=xavgv1m9feE",
            "youtubeId": "xavgv1m9feE"
          },
          {
            "id": "sequences-and-series-lesson-8",
            "title": "Arithmetic Sequence Formulas",
            "url": "https://www.youtube.com/watch?v=IshPbnP3vk8",
            "youtubeId": "IshPbnP3vk8"
          },
          {
            "id": "sequences-and-series-lesson-10",
            "title": "Arithmetic Sequences and Series",
            "url": "https://www.youtube.com/watch?v=XZJdyPkCxuE",
            "youtubeId": "XZJdyPkCxuE"
          },
          {
            "id": "sequences-and-series-lesson-12",
            "title": "The Geometric Mean",
            "url": "https://www.youtube.com/watch?v=xt07TExQNVg",
            "youtubeId": "xt07TExQNVg"
          },
          {
            "id": "sequences-and-series-lesson-13",
            "title": "The Mean Formulas",
            "url": "https://www.youtube.com/watch?v=6G6i8vSa8Zs",
            "youtubeId": "6G6i8vSa8Zs"
          },
          {
            "id": "sequences-and-series-lesson-14",
            "title": "Finding the Sum of a Finite Geometric Series",
            "url": "https://www.youtube.com/watch?v=uAnJmAFBpak",
            "youtubeId": "uAnJmAFBpak"
          },
          {
            "id": "sequences-and-series-lesson-15",
            "title": "Finding the Sum of an Infinite Geometric Series",
            "url": "https://www.youtube.com/watch?v=jxRqRLMliPc",
            "youtubeId": "jxRqRLMliPc"
          },
          {
            "id": "sequences-and-series-lesson-16",
            "title": "How to Derive the Sum Formula of a Geometric Series",
            "url": "https://www.youtube.com/watch?v=PqXAjCXYbNk",
            "youtubeId": "PqXAjCXYbNk"
          },
          {
            "id": "sequences-and-series-lesson-17",
            "title": "Geometric Sequences and Exponential Growth Problems",
            "url": "https://www.youtube.com/watch?v=aPXT8Ibqe9I",
            "youtubeId": "aPXT8Ibqe9I"
          },
          {
            "id": "sequences-and-series-lesson-18",
            "title": "Geometric Sequences and Series",
            "url": "https://www.youtube.com/watch?v=zRKZ0-kOUZM",
            "youtubeId": "zRKZ0-kOUZM"
          },
          {
            "id": "sequences-and-series-lesson-20",
            "title": "The Fibonacci Sequence",
            "url": "https://www.youtube.com/watch?v=mVO2dcuR7P0",
            "youtubeId": "mVO2dcuR7P0"
          }
        ]
      },
      {
        "id": "other-topics",
        "title": "Other Topics",
        "url": "https://www.video-tutor.net/other-topics.html",
        "lessons": [
          {
            "id": "other-topics-lesson-1",
            "title": "Introduction to Parametric Equations",
            "url": "https://www.youtube.com/watch?v=97pe-QlSGqA",
            "youtubeId": "97pe-QlSGqA"
          },
          {
            "id": "other-topics-lesson-2",
            "title": "Intro to Factorials",
            "url": "https://www.youtube.com/watch?v=pxh__ugRKz8",
            "youtubeId": "pxh__ugRKz8"
          },
          {
            "id": "other-topics-lesson-3",
            "title": "Double Factorials",
            "url": "https://www.youtube.com/watch?v=Yx-nzZdP58w",
            "youtubeId": "Yx-nzZdP58w"
          },
          {
            "id": "other-topics-lesson-4",
            "title": "Zero Factorial",
            "url": "https://www.youtube.com/watch?v=3JygpXpYhQ8",
            "youtubeId": "3JygpXpYhQ8"
          },
          {
            "id": "other-topics-lesson-5",
            "title": "Number Series",
            "url": "https://www.youtube.com/watch?v=r614AD021n0",
            "youtubeId": "r614AD021n0"
          },
          {
            "id": "other-topics-lesson-6",
            "title": "Mathematical Induction",
            "url": "https://www.youtube.com/watch?v=tHNVX3e9zd0",
            "youtubeId": "tHNVX3e9zd0"
          },
          {
            "id": "other-topics-lesson-7",
            "title": "Induction Divisibility",
            "url": "https://www.youtube.com/watch?v=8J7Bft3BN0g",
            "youtubeId": "8J7Bft3BN0g"
          },
          {
            "id": "other-topics-lesson-8",
            "title": "Binomial Theorem",
            "url": "https://www.youtube.com/watch?v=s19dWIHficY",
            "youtubeId": "s19dWIHficY"
          },
          {
            "id": "other-topics-lesson-9",
            "title": "Evaluating Binomial Coefficients",
            "url": "https://www.youtube.com/watch?v=EKN51vLKves",
            "youtubeId": "EKN51vLKves"
          },
          {
            "id": "other-topics-lesson-10",
            "title": "Permutations and Combinations",
            "url": "https://www.youtube.com/watch?v=XJnIdRXUi7A",
            "youtubeId": "XJnIdRXUi7A"
          },
          {
            "id": "other-topics-lesson-13",
            "title": "Precalculus Final Exam Review",
            "url": "https://www.youtube.com/watch?v=Tj-V6KnwM5w",
            "youtubeId": "Tj-V6KnwM5w"
          }
        ]
      },
    ]
  },
  {
    "id": "calculus",
    "title": "Calculus",
    "url": "https://www.video-tutor.net/calculus.html",
    "chapters": [
      {
        "id": "function-review",
        "title": "Review of Functions",
        "url": "https://www.video-tutor.net/function-review.html",
        "lessons": [
          {
            "id": "function-review-lesson-1",
            "title": "What is a Function?",
            "url": "https://www.youtube.com/watch?v=7JZ0IfCQ488",
            "youtubeId": "7JZ0IfCQ488"
          },
          {
            "id": "function-review-lesson-2",
            "title": "How to Evaluate Functions",
            "url": "https://www.youtube.com/watch?v=HyNie_PYgsY",
            "youtubeId": "HyNie_PYgsY"
          },
          {
            "id": "function-review-lesson-3",
            "title": "How to Evaluate Functions from a Graph",
            "url": "https://www.youtube.com/watch?v=eBD2TZUh5VI",
            "youtubeId": "eBD2TZUh5VI"
          },
          {
            "id": "function-review-lesson-4",
            "title": "How to Find the Domain and Range from a Graph",
            "url": "https://www.youtube.com/watch?v=KirGQOwjBVI",
            "youtubeId": "KirGQOwjBVI"
          },
          {
            "id": "function-review-lesson-5",
            "title": "How to Find the Domain of a Function",
            "url": "https://www.youtube.com/watch?v=djT6-YamHaA",
            "youtubeId": "djT6-YamHaA"
          },
          {
            "id": "function-review-lesson-6",
            "title": "How to Evaluate Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=OYOXMyFKotc",
            "youtubeId": "OYOXMyFKotc"
          },
          {
            "id": "function-review-lesson-7",
            "title": "How to Graph Piecewise Functions",
            "url": "https://www.youtube.com/watch?v=Uzw9tsGq2Pw",
            "youtubeId": "Uzw9tsGq2Pw"
          },
          {
            "id": "function-review-lesson-8",
            "title": "Increasing and Decreasing Functions",
            "url": "https://www.youtube.com/watch?v=EZeQxYg0zgg",
            "youtubeId": "EZeQxYg0zgg"
          },
          {
            "id": "function-review-lesson-9",
            "title": "Even and Odd Functions",
            "url": "https://www.youtube.com/watch?v=fKyBOLsqRlo",
            "youtubeId": "fKyBOLsqRlo"
          },
          {
            "id": "function-review-lesson-10",
            "title": "Identifying Maximum and Minimum Values",
            "url": "https://www.youtube.com/watch?v=GaltHJF6WyI",
            "youtubeId": "GaltHJF6WyI"
          },
          {
            "id": "function-review-lesson-11",
            "title": "Functions Review - Practice Problems",
            "url": "https://www.youtube.com/watch?v=kvU9sOzT2mk",
            "youtubeId": "kvU9sOzT2mk"
          },
          {
            "id": "function-review-lesson-12",
            "title": "Combination of Functions",
            "url": "https://www.youtube.com/watch?v=3gaxVHVI4cI",
            "youtubeId": "3gaxVHVI4cI"
          },
          {
            "id": "function-review-lesson-13",
            "title": "Composite Functions",
            "url": "https://www.youtube.com/watch?v=ZFPkQkURSxk",
            "youtubeId": "ZFPkQkURSxk"
          },
          {
            "id": "function-review-lesson-14",
            "title": "Evaluating Composite Functions",
            "url": "https://www.youtube.com/watch?v=6vQxIG4lJ3w",
            "youtubeId": "6vQxIG4lJ3w"
          },
          {
            "id": "function-review-lesson-15",
            "title": "Inverse Functions",
            "url": "https://www.youtube.com/watch?v=TN4ybFiuV3k",
            "youtubeId": "TN4ybFiuV3k"
          },
          {
            "id": "function-review-lesson-16",
            "title": "Verifying Inverse Functions",
            "url": "https://www.youtube.com/watch?v=6QamgSPprjA",
            "youtubeId": "6QamgSPprjA"
          },
          {
            "id": "function-review-lesson-17",
            "title": "Composite and Inverse Functions - Practice Problems",
            "url": "https://www.youtube.com/watch?v=1xATmTI-YY8",
            "youtubeId": "1xATmTI-YY8"
          },
          {
            "id": "function-review-lesson-18",
            "title": "Linear Equations Review",
            "url": "https://www.youtube.com/watch?v=Ft2_QtXAnh8",
            "youtubeId": "Ft2_QtXAnh8"
          },
          {
            "id": "function-review-lesson-19",
            "title": "Linear Functions - Practice Problems",
            "url": "https://www.youtube.com/watch?v=BtcKotD6Ni8",
            "youtubeId": "BtcKotD6Ni8"
          },
          {
            "id": "function-review-lesson-20",
            "title": "Graphing Quadratic Functions",
            "url": "https://www.youtube.com/watch?v=Hq2Up_1Ih5E",
            "youtubeId": "Hq2Up_1Ih5E"
          },
          {
            "id": "function-review-lesson-21",
            "title": "Quadratic Equations - Practice Problems",
            "url": "https://www.youtube.com/watch?v=fFFA7Q4eVuY",
            "youtubeId": "fFFA7Q4eVuY"
          },
          {
            "id": "function-review-lesson-22",
            "title": "The Quadratic Formula",
            "url": "https://www.youtube.com/watch?v=IlNAJl36-10",
            "youtubeId": "IlNAJl36-10"
          },
          {
            "id": "function-review-lesson-23",
            "title": "How to Graph Absolute Value Functions",
            "url": "https://www.youtube.com/watch?v=ld4UD98yHio",
            "youtubeId": "ld4UD98yHio"
          },
          {
            "id": "function-review-lesson-24",
            "title": "How to Graph Cubic Functions",
            "url": "https://www.youtube.com/watch?v=yOrXqvO2M1M",
            "youtubeId": "yOrXqvO2M1M"
          },
          {
            "id": "function-review-lesson-25",
            "title": "How to Graph Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=a5x4lwnvHM0",
            "youtubeId": "a5x4lwnvHM0"
          },
          {
            "id": "function-review-lesson-26",
            "title": "How to Graph Reciprocal Functions",
            "url": "https://www.youtube.com/watch?v=MK_Cep8C3g0",
            "youtubeId": "MK_Cep8C3g0"
          },
          {
            "id": "function-review-lesson-27",
            "title": "How to Graph Rational Functions",
            "url": "https://www.youtube.com/watch?v=bWVhwYdSnfk",
            "youtubeId": "bWVhwYdSnfk"
          },
          {
            "id": "function-review-lesson-28",
            "title": "How to Graph Advanced Rational Functions",
            "url": "https://www.youtube.com/watch?v=GxynsEIvjRA",
            "youtubeId": "GxynsEIvjRA"
          },
          {
            "id": "function-review-lesson-29",
            "title": "How to Graph Radical Functions",
            "url": "https://www.youtube.com/watch?v=SLV600BpHpE",
            "youtubeId": "SLV600BpHpE"
          },
          {
            "id": "function-review-lesson-31",
            "title": "Evaluating Logarithms",
            "url": "https://www.youtube.com/watch?v=kqVpPSzkTYA",
            "youtubeId": "kqVpPSzkTYA"
          },
          {
            "id": "function-review-lesson-32",
            "title": "Logarithmic Formulas",
            "url": "https://www.youtube.com/watch?v=tzBIyIKLtWE",
            "youtubeId": "tzBIyIKLtWE"
          },
          {
            "id": "function-review-lesson-34",
            "title": "Properties of Logarithms",
            "url": "https://www.youtube.com/watch?v=Jtv9Lnf7Zw8",
            "youtubeId": "Jtv9Lnf7Zw8"
          },
          {
            "id": "function-review-lesson-35",
            "title": "Change of Base Formula",
            "url": "https://www.youtube.com/watch?v=FFm-zaFW_X4",
            "youtubeId": "FFm-zaFW_X4"
          },
          {
            "id": "function-review-lesson-36",
            "title": "Solving Logarithmic Equations",
            "url": "https://www.youtube.com/watch?v=fnhFneOz6n8",
            "youtubeId": "fnhFneOz6n8"
          },
          {
            "id": "function-review-lesson-37",
            "title": "Evaluating Natural Logarithms",
            "url": "https://www.youtube.com/watch?v=daUlTsnCNRQ",
            "youtubeId": "daUlTsnCNRQ"
          },
          {
            "id": "function-review-lesson-38",
            "title": "Euler's Number",
            "url": "https://www.youtube.com/watch?v=pDFcu_wLOzo",
            "youtubeId": "pDFcu_wLOzo"
          },
          {
            "id": "function-review-lesson-39",
            "title": "Laws of Exponents",
            "url": "https://www.youtube.com/watch?v=ZtTO8uUGy2Y",
            "youtubeId": "ZtTO8uUGy2Y"
          },
          {
            "id": "function-review-lesson-41",
            "title": "Solving Exponential Equations",
            "url": "https://www.youtube.com/watch?v=9tutJ5xrRwg",
            "youtubeId": "9tutJ5xrRwg"
          },
          {
            "id": "function-review-lesson-42",
            "title": "How to Graph Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=-nptxS9rZNA",
            "youtubeId": "-nptxS9rZNA"
          },
          {
            "id": "function-review-lesson-43",
            "title": "How to Graph Exponential Functions",
            "url": "https://www.youtube.com/watch?v=DASfP8KAyvs",
            "youtubeId": "DASfP8KAyvs"
          },
          {
            "id": "function-review-lesson-44",
            "title": "How to Graph Natural Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=ymXD6xCmzJE",
            "youtubeId": "ymXD6xCmzJE"
          },
          {
            "id": "function-review-lesson-45",
            "title": "How to Graph Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=bm8oYKKlCXI",
            "youtubeId": "bm8oYKKlCXI"
          },
          {
            "id": "function-review-lesson-46",
            "title": "Graphing Trigonometric Functions - More Examples!",
            "url": "https://www.youtube.com/watch?v=fo_q9mEAFp4",
            "youtubeId": "fo_q9mEAFp4"
          },
          {
            "id": "function-review-lesson-47",
            "title": "Evaluating Trig Functions",
            "url": "https://www.youtube.com/watch?v=bTdjcvm6pPo",
            "youtubeId": "bTdjcvm6pPo"
          },
          {
            "id": "function-review-lesson-48",
            "title": "Evaluating Inverse Trig Functions",
            "url": "https://www.youtube.com/watch?v=jt7p-mCC0ng",
            "youtubeId": "jt7p-mCC0ng"
          },
          {
            "id": "function-review-lesson-49",
            "title": "Transformation of Functions",
            "url": "https://www.youtube.com/watch?v=Tmdrjs9xufc",
            "youtubeId": "Tmdrjs9xufc"
          }
        ]
      },
      {
        "id": "limits",
        "title": "Limits",
        "url": "https://www.video-tutor.net/limits.html",
        "lessons": [
          {
            "id": "limits-lesson-1",
            "title": "Introduction to Limits",
            "url": "https://www.youtube.com/watch?v=zLozwNf5r-8",
            "youtubeId": "zLozwNf5r-8"
          },
          {
            "id": "limits-lesson-2",
            "title": "Properties of Limits",
            "url": "https://www.youtube.com/watch?v=P7G7F3NzPw0",
            "youtubeId": "P7G7F3NzPw0"
          },
          {
            "id": "limits-lesson-3",
            "title": "How to Evaluate the Limit of a Polynomial Function",
            "url": "https://www.youtube.com/watch?v=NswmsBaFkOM",
            "youtubeId": "NswmsBaFkOM"
          },
          {
            "id": "limits-lesson-4",
            "title": "How to Evaluate Limits from a Graph",
            "url": "https://www.youtube.com/watch?v=7Q2HwTHcxA0",
            "youtubeId": "7Q2HwTHcxA0"
          },
          {
            "id": "limits-lesson-5",
            "title": "How to Evaluate Limits by Factoring",
            "url": "https://www.youtube.com/watch?v=fOrOeZA-vdY",
            "youtubeId": "fOrOeZA-vdY"
          },
          {
            "id": "limits-lesson-6",
            "title": "Limits of Rational Functions - Fractions and Square Roots",
            "url": "https://www.youtube.com/watch?v=M2BgBG2Su94",
            "youtubeId": "M2BgBG2Su94"
          },
          {
            "id": "limits-lesson-7",
            "title": "Limits of Rational Functions - Another Example",
            "url": "https://www.youtube.com/watch?v=5emT2wpzWk8",
            "youtubeId": "5emT2wpzWk8"
          },
          {
            "id": "limits-lesson-8",
            "title": "Limits with Fractions and Square Roots - More Examples",
            "url": "https://www.youtube.com/watch?v=5emT2wpzWk8",
            "youtubeId": "5emT2wpzWk8"
          },
          {
            "id": "limits-lesson-9",
            "title": "Limits with Radicals",
            "url": "https://www.youtube.com/watch?v=qay5HvT1UK8",
            "youtubeId": "qay5HvT1UK8"
          },
          {
            "id": "limits-lesson-10",
            "title": "Evaluating Limits with Absolute Functions",
            "url": "https://www.youtube.com/watch?v=wFeh4ByT0xs",
            "youtubeId": "wFeh4ByT0xs"
          },
          {
            "id": "limits-lesson-11",
            "title": "Limits of Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=HbtuSC_WOW0",
            "youtubeId": "HbtuSC_WOW0"
          },
          {
            "id": "limits-lesson-12",
            "title": "Infinite Limits and Vertical Asymptotes",
            "url": "https://www.youtube.com/watch?v=xvFqomOpLrs",
            "youtubeId": "xvFqomOpLrs"
          },
          {
            "id": "limits-lesson-13",
            "title": "How to Find the Limit at Infinity",
            "url": "https://www.youtube.com/watch?v=NmLljBAg82o",
            "youtubeId": "NmLljBAg82o"
          },
          {
            "id": "limits-lesson-14",
            "title": "Limits of Inverse Trig Functions",
            "url": "https://www.youtube.com/watch?v=UPUzKShJPuk",
            "youtubeId": "UPUzKShJPuk"
          },
          {
            "id": "limits-lesson-15",
            "title": "Limit Formulas",
            "url": "https://www.youtube.com/watch?v=R-bHkyRRo0o",
            "youtubeId": "R-bHkyRRo0o"
          },
          {
            "id": "limits-lesson-16",
            "title": "Limit at Infinity with Radicals and Fractional Exponents",
            "url": "https://www.youtube.com/watch?v=1hyoTeWg6Bs",
            "youtubeId": "1hyoTeWg6Bs"
          },
          {
            "id": "limits-lesson-17",
            "title": "Limits at Infinity with Horizontal Asymptotes",
            "url": "https://www.youtube.com/watch?v=sjLFl7Z8W_I",
            "youtubeId": "sjLFl7Z8W_I"
          },
          {
            "id": "limits-lesson-18",
            "title": "Limits and Logarithms - Euler's Number 'e'",
            "url": "https://www.youtube.com/watch?v=fHzmQmcvheI",
            "youtubeId": "fHzmQmcvheI"
          },
          {
            "id": "limits-lesson-19",
            "title": "More Information on Euler's Number",
            "url": "https://www.youtube.com/watch?v=pDFcu_wLOzo",
            "youtubeId": "pDFcu_wLOzo"
          },
          {
            "id": "limits-lesson-20",
            "title": "The Squeeze Theorem",
            "url": "https://www.youtube.com/watch?v=lVIb9iJ-rRI",
            "youtubeId": "lVIb9iJ-rRI"
          },
          {
            "id": "limits-lesson-21",
            "title": "The Greatest Integer Function",
            "url": "https://www.youtube.com/watch?v=teaD5isBTfk",
            "youtubeId": "teaD5isBTfk"
          },
          {
            "id": "limits-lesson-22",
            "title": "The Intermediate Value Theorem",
            "url": "https://www.youtube.com/watch?v=4L9ffuwj4Lk",
            "youtubeId": "4L9ffuwj4Lk"
          },
          {
            "id": "limits-lesson-23",
            "title": "Introduction to Continuity",
            "url": "https://www.youtube.com/watch?v=joewRl1CTL8",
            "youtubeId": "joewRl1CTL8"
          },
          {
            "id": "limits-lesson-24",
            "title": "Piecewise Functions - Limits and Continuity",
            "url": "https://www.youtube.com/watch?v=JrYmEo6hoiU",
            "youtubeId": "JrYmEo6hoiU"
          },
          {
            "id": "limits-lesson-25",
            "title": "How to Tell if the Limit Exist",
            "url": "https://www.youtube.com/watch?v=5VPYZIaG4Eg",
            "youtubeId": "5VPYZIaG4Eg"
          },
          {
            "id": "limits-lesson-26",
            "title": "The 3 Step Continuity Test",
            "url": "https://www.youtube.com/watch?v=WT7oxiiFYt8",
            "youtubeId": "WT7oxiiFYt8"
          },
          {
            "id": "limits-lesson-27",
            "title": "Continuity and Differentiability",
            "url": "https://www.youtube.com/watch?v=fml0-ELYLaE",
            "youtubeId": "fml0-ELYLaE"
          },
          {
            "id": "limits-lesson-28",
            "title": "How to Find the Limit of a Composite Function Given Two Graphs",
            "url": "https://www.youtube.com/watch?v=yq3eri878II",
            "youtubeId": "yq3eri878II"
          },
          {
            "id": "limits-lesson-29",
            "title": "How to Find the Limit of a Composite Function",
            "url": "https://www.youtube.com/watch?v=KjL9cWHzeIc",
            "youtubeId": "KjL9cWHzeIc"
          },
          {
            "id": "limits-lesson-31",
            "title": "Limits and Continuity - Practice Problems",
            "url": "https://www.youtube.com/watch?v=9brk313DjV8",
            "youtubeId": "9brk313DjV8"
          }
        ]
      },
      {
        "id": "derivatives",
        "title": "Derivatives",
        "url": "https://www.video-tutor.net/derivatives.html",
        "lessons": [
          {
            "id": "derivatives-lesson-1",
            "title": "The Power Rule of Derivatives",
            "url": "https://www.youtube.com/watch?v=9Yz-RCdS2Tg",
            "youtubeId": "9Yz-RCdS2Tg"
          },
          {
            "id": "derivatives-lesson-2",
            "title": "The Constant Multiple Rule for Derivatives",
            "url": "https://www.youtube.com/watch?v=ut-AFj600S0",
            "youtubeId": "ut-AFj600S0"
          },
          {
            "id": "derivatives-lesson-3",
            "title": "Derivatives of Polynomial Functions",
            "url": "https://www.youtube.com/watch?v=8Sv6CNuNwqo",
            "youtubeId": "8Sv6CNuNwqo"
          },
          {
            "id": "derivatives-lesson-4",
            "title": "The Limit Definition of the Derivative",
            "url": "https://www.youtube.com/watch?v=-aTLjoDT1GQ",
            "youtubeId": "-aTLjoDT1GQ"
          },
          {
            "id": "derivatives-lesson-5",
            "title": "The Constant Rule for Derivatives",
            "url": "https://www.youtube.com/watch?v=cyn6CDnAlcA",
            "youtubeId": "cyn6CDnAlcA"
          },
          {
            "id": "derivatives-lesson-6",
            "title": "Derivatives of Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=PEqCa0U77mc",
            "youtubeId": "PEqCa0U77mc"
          },
          {
            "id": "derivatives-lesson-7",
            "title": "The Derivative of Sine and Cosine Functions",
            "url": "https://www.youtube.com/watch?v=QYJx-ztCrE4",
            "youtubeId": "QYJx-ztCrE4"
          },
          {
            "id": "derivatives-lesson-8",
            "title": "Alternate Form of the Limit Definition of the Derivative",
            "url": "https://www.youtube.com/watch?v=6yzaEpacZkg",
            "youtubeId": "6yzaEpacZkg"
          },
          {
            "id": "derivatives-lesson-9",
            "title": "Using Derivatives to Evaluate Limits",
            "url": "https://www.youtube.com/watch?v=xGibYZiT5-U",
            "youtubeId": "xGibYZiT5-U"
          },
          {
            "id": "derivatives-lesson-10",
            "title": "Finding Tangent Line Equations",
            "url": "https://www.youtube.com/watch?v=5NyeGzbBJQM",
            "youtubeId": "5NyeGzbBJQM"
          },
          {
            "id": "derivatives-lesson-11",
            "title": "Tangent Line Equations - More Examples!",
            "url": "https://www.youtube.com/watch?v=UOrS2qje2_o",
            "youtubeId": "UOrS2qje2_o"
          },
          {
            "id": "derivatives-lesson-12",
            "title": "Finding Horizontal Tangent Lines",
            "url": "https://www.youtube.com/watch?v=aNfoxbMUOHk",
            "youtubeId": "aNfoxbMUOHk"
          },
          {
            "id": "derivatives-lesson-13",
            "title": "The Normal Line Equation",
            "url": "https://www.youtube.com/watch?v=lEF2mmR3CWU",
            "youtubeId": "lEF2mmR3CWU"
          },
          {
            "id": "derivatives-lesson-14",
            "title": "The Secant Line Equation",
            "url": "https://www.youtube.com/watch?v=680o1GL-LRg",
            "youtubeId": "680o1GL-LRg"
          },
          {
            "id": "derivatives-lesson-15",
            "title": "Instantaneous Rate of Change and Average Rate of Change",
            "url": "https://www.youtube.com/watch?v=dvQdQLTnDpk",
            "youtubeId": "dvQdQLTnDpk"
          },
          {
            "id": "derivatives-lesson-16",
            "title": "Average Velocity and Instantaneous Velocity",
            "url": "https://www.youtube.com/watch?v=AwxT1xjMP9g",
            "youtubeId": "AwxT1xjMP9g"
          },
          {
            "id": "derivatives-lesson-17",
            "title": "Derivatives of Rational Functions",
            "url": "https://www.youtube.com/watch?v=qknoFdPwEco",
            "youtubeId": "qknoFdPwEco"
          },
          {
            "id": "derivatives-lesson-18",
            "title": "Derivatives of Radical Functions",
            "url": "https://www.youtube.com/watch?v=B1YkgNDbx5o",
            "youtubeId": "B1YkgNDbx5o"
          },
          {
            "id": "derivatives-lesson-19",
            "title": "The Product Rule for Derivatives",
            "url": "https://www.youtube.com/watch?v=17X5g9QArTc",
            "youtubeId": "17X5g9QArTc"
          },
          {
            "id": "derivatives-lesson-20",
            "title": "The Product Rule with 3 Functions",
            "url": "https://www.youtube.com/watch?v=cUXW9cj_CpE",
            "youtubeId": "cUXW9cj_CpE"
          },
          {
            "id": "derivatives-lesson-21",
            "title": "The Quotient Rule",
            "url": "https://www.youtube.com/watch?v=8jVDEcQ0wXk",
            "youtubeId": "8jVDEcQ0wXk"
          },
          {
            "id": "derivatives-lesson-22",
            "title": "The Reciprocal Rule",
            "url": "https://www.youtube.com/watch?v=dsqD5zg9hLY",
            "youtubeId": "dsqD5zg9hLY"
          },
          {
            "id": "derivatives-lesson-23",
            "title": "The Chain Rule",
            "url": "https://www.youtube.com/watch?v=HaHsqDjWMLU",
            "youtubeId": "HaHsqDjWMLU"
          },
          {
            "id": "derivatives-lesson-24",
            "title": "The Chain Rule - A long Problem",
            "url": "https://www.youtube.com/watch?v=_1LTThkXvSw",
            "youtubeId": "_1LTThkXvSw"
          },
          {
            "id": "derivatives-lesson-25",
            "title": "Derivatives of Composite Functions with Tables",
            "url": "https://www.youtube.com/watch?v=vNXjMTv4vHs&t=2889s",
            "youtubeId": "vNXjMTv4vHs"
          },
          {
            "id": "derivatives-lesson-26",
            "title": "Simplifying Derivatives",
            "url": "https://www.youtube.com/watch?v=3lUOtjkqfQo",
            "youtubeId": "3lUOtjkqfQo"
          },
          {
            "id": "derivatives-lesson-27",
            "title": "Higher Order Derivatives",
            "url": "https://www.youtube.com/watch?v=s7rd9YPJrNc",
            "youtubeId": "s7rd9YPJrNc"
          },
          {
            "id": "derivatives-lesson-28",
            "title": "Implicit Differentiation",
            "url": "https://www.youtube.com/watch?v=xbviQHhU1rA",
            "youtubeId": "xbviQHhU1rA"
          },
          {
            "id": "derivatives-lesson-29",
            "title": "Derivatives of Inverse Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=KbYW9FDm-Zk",
            "youtubeId": "KbYW9FDm-Zk"
          },
          {
            "id": "derivatives-lesson-30",
            "title": "Derivatives of Exponential Functions",
            "url": "https://www.youtube.com/watch?v=yg_497u6JnA",
            "youtubeId": "yg_497u6JnA"
          },
          {
            "id": "derivatives-lesson-31",
            "title": "Derivatives of Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=Dp9sgIvaKPk",
            "youtubeId": "Dp9sgIvaKPk"
          },
          {
            "id": "derivatives-lesson-32",
            "title": "Introduction to Logarithmic Differentiation",
            "url": "https://www.youtube.com/watch?v=9z1Dz60mWcQ",
            "youtubeId": "9z1Dz60mWcQ"
          },
          {
            "id": "derivatives-lesson-33",
            "title": "Logarithmic Differentiation Formula",
            "url": "https://www.youtube.com/watch?v=C2kbaQeb_FM",
            "youtubeId": "C2kbaQeb_FM"
          },
          {
            "id": "derivatives-lesson-34",
            "title": "Derivatives of Inverse Functions",
            "url": "https://www.youtube.com/watch?v=Hw6ltuCEtuU",
            "youtubeId": "Hw6ltuCEtuU"
          },
          {
            "id": "derivatives-lesson-35",
            "title": "Derivative Formulas",
            "url": "https://www.youtube.com/watch?v=AdLAkD-r9Rs",
            "youtubeId": "AdLAkD-r9Rs"
          },
          {
            "id": "derivatives-lesson-37",
            "title": "Derivative Practice Problems",
            "url": "https://www.youtube.com/watch?v=FLAm7Hqm-58",
            "youtubeId": "FLAm7Hqm-58"
          },
          {
            "id": "derivatives-lesson-40",
            "title": "Function Linearization - Tangent Line Approximations",
            "url": "https://www.youtube.com/watch?v=XQaCbFMnDo0",
            "youtubeId": "XQaCbFMnDo0"
          },
          {
            "id": "derivatives-lesson-41",
            "title": "Differentials and Local Linearization",
            "url": "https://www.youtube.com/watch?v=C5RI5eLzVfo",
            "youtubeId": "C5RI5eLzVfo"
          },
          {
            "id": "derivatives-lesson-42",
            "title": "Estimating Function Values Using Differentials",
            "url": "https://www.youtube.com/watch?v=NL0NFV-O8Vg",
            "youtubeId": "NL0NFV-O8Vg"
          }
        ]
      },
      {
        "id": "derivative-applications",
        "title": "Applications of Derivatives",
        "url": "https://www.video-tutor.net/derivative-applications.html",
        "lessons": [
          {
            "id": "derivative-applications-lesson-1",
            "title": "The Extreme Value Theorem",
            "url": "https://www.youtube.com/watch?v=Sx2lPZlnWfs",
            "youtubeId": "Sx2lPZlnWfs"
          },
          {
            "id": "derivative-applications-lesson-2",
            "title": "Finding Critical Numbers",
            "url": "https://www.youtube.com/watch?v=Bp9EbV3COVA",
            "youtubeId": "Bp9EbV3COVA"
          },
          {
            "id": "derivative-applications-lesson-3",
            "title": "Finding Local Maximum and Minimum Values",
            "url": "https://www.youtube.com/watch?v=WCq3sRzsJfs",
            "youtubeId": "WCq3sRzsJfs"
          },
          {
            "id": "derivative-applications-lesson-4",
            "title": "Finding Absolute Maximum and Minimum Values",
            "url": "https://www.youtube.com/watch?v=3wrXDw5ETh4",
            "youtubeId": "3wrXDw5ETh4"
          },
          {
            "id": "derivative-applications-lesson-5",
            "title": "Application of Derivatives",
            "url": "https://www.youtube.com/watch?v=WiOdQQYLMU4",
            "youtubeId": "WiOdQQYLMU4"
          },
          {
            "id": "derivative-applications-lesson-6",
            "title": "Rolle's Theorem",
            "url": "https://www.youtube.com/watch?v=LHym1ARc2cE",
            "youtubeId": "LHym1ARc2cE"
          },
          {
            "id": "derivative-applications-lesson-7",
            "title": "Mean Value Theorem",
            "url": "https://www.youtube.com/watch?v=SL2RobwU_M4",
            "youtubeId": "SL2RobwU_M4"
          },
          {
            "id": "derivative-applications-lesson-8",
            "title": "Increasing and Decreasing Functions",
            "url": "https://www.youtube.com/watch?v=Dyl7jPlJXOM",
            "youtubeId": "Dyl7jPlJXOM"
          },
          {
            "id": "derivative-applications-lesson-9",
            "title": "First Derivative Test",
            "url": "https://www.youtube.com/watch?v=G5wlKltW7pM",
            "youtubeId": "G5wlKltW7pM"
          },
          {
            "id": "derivative-applications-lesson-10",
            "title": "Concavity, Inflection Points, and the Second Derivative",
            "url": "https://www.youtube.com/watch?v=OhqNbQi9QPk",
            "youtubeId": "OhqNbQi9QPk"
          },
          {
            "id": "derivative-applications-lesson-11",
            "title": "The Second Derivative Test",
            "url": "https://www.youtube.com/watch?v=G8GAsYkZlpE",
            "youtubeId": "G8GAsYkZlpE"
          },
          {
            "id": "derivative-applications-lesson-12",
            "title": "L'hopital's Rule",
            "url": "https://www.youtube.com/watch?v=Gh48aOvWcxw",
            "youtubeId": "Gh48aOvWcxw"
          },
          {
            "id": "derivative-applications-lesson-13",
            "title": "Graphing Functions Using Derivatives - Curve Sketching",
            "url": "https://www.youtube.com/watch?v=JTVNUdL7sWs",
            "youtubeId": "JTVNUdL7sWs"
          },
          {
            "id": "derivative-applications-lesson-14",
            "title": "Newton's Method",
            "url": "https://www.youtube.com/watch?v=-5e2cULI3H8",
            "youtubeId": "-5e2cULI3H8"
          },
          {
            "id": "derivative-applications-lesson-15",
            "title": "Optimization Problems",
            "url": "https://www.youtube.com/watch?v=lx8RcYcYVuU",
            "youtubeId": "lx8RcYcYVuU"
          },
          {
            "id": "derivative-applications-lesson-17",
            "title": "Marginal Cost and Average Total Cost",
            "url": "https://www.youtube.com/watch?v=uPp1QZZKc8E",
            "youtubeId": "uPp1QZZKc8E"
          },
          {
            "id": "derivative-applications-lesson-18",
            "title": "Marginal Revenue and Marginal Profit",
            "url": "https://www.youtube.com/watch?v=VWShego7Ds8",
            "youtubeId": "VWShego7Ds8"
          },
          {
            "id": "derivative-applications-lesson-19",
            "title": "Antiderivatives",
            "url": "https://www.youtube.com/watch?v=xaCPDMEkbig",
            "youtubeId": "xaCPDMEkbig"
          }
        ]
      },
      {
        "id": "integration",
        "title": "Integration",
        "url": "https://www.video-tutor.net/integration.html",
        "lessons": [
          {
            "id": "integration-lesson-1",
            "title": "Basic Integration Problems",
            "url": "https://www.youtube.com/watch?v=zOxaUlRkFG0",
            "youtubeId": "zOxaUlRkFG0"
          },
          {
            "id": "integration-lesson-2",
            "title": "Basic Integration Formulas",
            "url": "https://www.youtube.com/watch?v=NcoRlvM1dmg",
            "youtubeId": "NcoRlvM1dmg"
          },
          {
            "id": "integration-lesson-3",
            "title": "The Indefinite Integral - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=JTFMeSCxgcA",
            "youtubeId": "JTFMeSCxgcA"
          },
          {
            "id": "integration-lesson-4",
            "title": "The Definite Integral",
            "url": "https://www.youtube.com/watch?v=Gc3QvUB0PkI",
            "youtubeId": "Gc3QvUB0PkI"
          },
          {
            "id": "integration-lesson-5",
            "title": "The Definite Integral - More Example Problems",
            "url": "https://www.youtube.com/watch?v=rCWOdfQ3cwQ",
            "youtubeId": "rCWOdfQ3cwQ"
          },
          {
            "id": "integration-lesson-6",
            "title": "Properties of Definite Integrals",
            "url": "https://www.youtube.com/watch?v=QcHz3h81U-s",
            "youtubeId": "QcHz3h81U-s"
          },
          {
            "id": "integration-lesson-7",
            "title": "Finding the Area Using Riemann Sums - Left & Right Endpoints",
            "url": "https://www.youtube.com/watch?v=YTKQswb60Pw",
            "youtubeId": "YTKQswb60Pw"
          },
          {
            "id": "integration-lesson-8",
            "title": "Finding the Area Using the Midpoint Rule",
            "url": "https://www.youtube.com/watch?v=5XreKMJDJsg",
            "youtubeId": "5XreKMJDJsg"
          },
          {
            "id": "integration-lesson-9",
            "title": "Summation Formulas for the Next Lesson",
            "url": "https://www.youtube.com/watch?v=XJkIaw2e1Pw",
            "youtubeId": "XJkIaw2e1Pw"
          },
          {
            "id": "integration-lesson-10",
            "title": "Finding the Area Using the Limit Definition and Sigma Notation",
            "url": "https://www.youtube.com/watch?v=ctEpKZyxqFU",
            "youtubeId": "ctEpKZyxqFU"
          },
          {
            "id": "integration-lesson-11",
            "title": "Evaluating Definite Integrals Using Geometry",
            "url": "https://www.youtube.com/watch?v=ghxEOz9rmwE",
            "youtubeId": "ghxEOz9rmwE"
          },
          {
            "id": "integration-lesson-12",
            "title": "Integral of Absolute Value Functions",
            "url": "https://www.youtube.com/watch?v=X2OYT2vByPQ",
            "youtubeId": "X2OYT2vByPQ"
          },
          {
            "id": "integration-lesson-13",
            "title": "Fundamental Theorem of Calculus - Part 1",
            "url": "https://www.youtube.com/watch?v=aeB5BWY0RlE",
            "youtubeId": "aeB5BWY0RlE"
          },
          {
            "id": "integration-lesson-14",
            "title": "Fundamental Theorem of Calculus - Part 2",
            "url": "https://www.youtube.com/watch?v=ns8N1UuXl4w",
            "youtubeId": "ns8N1UuXl4w"
          },
          {
            "id": "integration-lesson-15",
            "title": "The Net Change Theorem",
            "url": "https://www.youtube.com/watch?v=df1Qr8pepx0",
            "youtubeId": "df1Qr8pepx0"
          },
          {
            "id": "integration-lesson-16",
            "title": "Finding Particular Solutions of Differential Equations",
            "url": "https://www.youtube.com/watch?v=H5tD_NtPDuU",
            "youtubeId": "H5tD_NtPDuU"
          },
          {
            "id": "integration-lesson-17",
            "title": "Rectilinear Motion - Distance, Displacement, Speed, & Velocity",
            "url": "https://www.youtube.com/watch?v=LBmET4sH460",
            "youtubeId": "LBmET4sH460"
          },
          {
            "id": "integration-lesson-18",
            "title": "U-Substitution with Indefinite Integrals",
            "url": "https://www.youtube.com/watch?v=sdYdnpYn-1o",
            "youtubeId": "sdYdnpYn-1o"
          },
          {
            "id": "integration-lesson-20",
            "title": "Integration of Exponential Functions by U-Substitution",
            "url": "https://www.youtube.com/watch?v=D9dqdbCgJQM",
            "youtubeId": "D9dqdbCgJQM"
          },
          {
            "id": "integration-lesson-21",
            "title": "U-Substitution with Definite Integrals",
            "url": "https://www.youtube.com/watch?v=tM4RWc9ryx0",
            "youtubeId": "tM4RWc9ryx0"
          },
          {
            "id": "integration-lesson-22",
            "title": "Integration Practice Problems",
            "url": "https://www.youtube.com/watch?v=6WUjbJEeJwM",
            "youtubeId": "6WUjbJEeJwM"
          }
        ]
      },
      {
        "id": "integration-applications",
        "title": "Applications of Integration",
        "url": "https://www.video-tutor.net/integration-applications.html",
        "lessons": [
          {
            "id": "integration-applications-lesson-1",
            "title": "Finding the Area Under the Curve",
            "url": "https://www.youtube.com/watch?v=UjTTx2eYrx8",
            "youtubeId": "UjTTx2eYrx8"
          },
          {
            "id": "integration-applications-lesson-2",
            "title": "Finding the Area Between Two Curves",
            "url": "https://www.youtube.com/watch?v=kgg5Rspf1Js",
            "youtubeId": "kgg5Rspf1Js"
          },
          {
            "id": "integration-applications-lesson-4",
            "title": "Finding the Area Bounded by Three Curves",
            "url": "https://www.youtube.com/watch?v=JnuFCXYhuz4",
            "youtubeId": "JnuFCXYhuz4"
          },
          {
            "id": "integration-applications-lesson-5",
            "title": "Disk and Washer Method",
            "url": "https://www.youtube.com/watch?v=SAHSVg7Jw_A",
            "youtubeId": "SAHSVg7Jw_A"
          },
          {
            "id": "integration-applications-lesson-7",
            "title": "The Shell Method",
            "url": "https://www.youtube.com/watch?v=D5sT1br9soI",
            "youtubeId": "D5sT1br9soI"
          },
          {
            "id": "integration-applications-lesson-9",
            "title": "Volume by Cross Sections",
            "url": "https://www.youtube.com/watch?v=qMXPnfx2MQM",
            "youtubeId": "qMXPnfx2MQM"
          },
          {
            "id": "integration-applications-lesson-11",
            "title": "Work Problems",
            "url": "https://www.youtube.com/watch?v=TLw8xbmnY3c",
            "youtubeId": "TLw8xbmnY3c"
          },
          {
            "id": "integration-applications-lesson-12",
            "title": "Average Value of a Function Over an Interval",
            "url": "https://www.youtube.com/watch?v=MB1xDNKimNc",
            "youtubeId": "MB1xDNKimNc"
          },
          {
            "id": "integration-applications-lesson-13",
            "title": "Mean Value Theorem for Integrals",
            "url": "https://www.youtube.com/watch?v=bLeglo-c5Tw",
            "youtubeId": "bLeglo-c5Tw"
          },
          {
            "id": "integration-applications-lesson-14",
            "title": "Applications of Integration Formula Review",
            "url": "https://www.youtube.com/watch?v=H71xfyzbkZI",
            "youtubeId": "H71xfyzbkZI"
          }
        ]
      },
      {
        "id": "calculus-1-final",
        "title": "Calculus 1 Review",
        "url": "https://www.video-tutor.net/calculus-1-final.html",
        "lessons": [
          {
            "id": "calculus-1-final-lesson-1",
            "title": "15 Test Questions",
            "url": "https://www.youtube.com/watch?v=WmBzmHru78w",
            "youtubeId": "WmBzmHru78w"
          }
        ]
      },
      {
        "id": "integration-techniques",
        "title": "Integration Techniques",
        "url": "https://www.video-tutor.net/integration-techniques.html",
        "lessons": [
          {
            "id": "integration-techniques-lesson-1",
            "title": "Integration by Parts",
            "url": "https://www.youtube.com/watch?v=sWSLLO3DS1I",
            "youtubeId": "sWSLLO3DS1I"
          },
          {
            "id": "integration-techniques-lesson-3",
            "title": "Integration by Parts - Tabular Method",
            "url": "https://www.youtube.com/watch?v=Yyic5aaXGaw",
            "youtubeId": "Yyic5aaXGaw"
          },
          {
            "id": "integration-techniques-lesson-4",
            "title": "Integration by Parts - Formula Derivation",
            "url": "https://www.youtube.com/watch?v=-JrmyEPa56I",
            "youtubeId": "-JrmyEPa56I"
          },
          {
            "id": "integration-techniques-lesson-5",
            "title": "Integral of e^x sinx Formula",
            "url": "https://www.youtube.com/watch?v=t0PdG_aZLFg",
            "youtubeId": "t0PdG_aZLFg"
          },
          {
            "id": "integration-techniques-lesson-6",
            "title": "Integration by Parts - 3 Product Terms",
            "url": "https://www.youtube.com/watch?v=yJF3kv8UzGo",
            "youtubeId": "yJF3kv8UzGo"
          },
          {
            "id": "integration-techniques-lesson-7",
            "title": "Trigonometric Integrals",
            "url": "https://www.youtube.com/watch?v=3pXALn2ovIE",
            "youtubeId": "3pXALn2ovIE"
          },
          {
            "id": "integration-techniques-lesson-9",
            "title": "Basic Integration Formulas of Trig Functions",
            "url": "https://www.youtube.com/watch?v=KJnAz1NXRho",
            "youtubeId": "KJnAz1NXRho"
          },
          {
            "id": "integration-techniques-lesson-10",
            "title": "Reduction Formulas",
            "url": "https://www.youtube.com/watch?v=LBZcfl97LwY",
            "youtubeId": "LBZcfl97LwY"
          },
          {
            "id": "integration-techniques-lesson-11",
            "title": "Trigonometric Substitution",
            "url": "https://www.youtube.com/watch?v=ocgjfF2AboA",
            "youtubeId": "ocgjfF2AboA"
          },
          {
            "id": "integration-techniques-lesson-13",
            "title": "Integration Formulas for Trig Substitution",
            "url": "https://www.youtube.com/watch?v=_KJqeJDb8-I",
            "youtubeId": "_KJqeJDb8-I"
          },
          {
            "id": "integration-techniques-lesson-14",
            "title": "Integration of Rational Functions into Logarithms",
            "url": "https://www.youtube.com/watch?v=4yJmhZBB40w",
            "youtubeId": "4yJmhZBB40w"
          },
          {
            "id": "integration-techniques-lesson-15",
            "title": "Integration by Partial Fractions",
            "url": "https://www.youtube.com/watch?v=6rXByMcuAyI",
            "youtubeId": "6rXByMcuAyI"
          },
          {
            "id": "integration-techniques-lesson-17",
            "title": "Integration of Rational Functions by Completing the Square",
            "url": "https://www.youtube.com/watch?v=vQerALNpNfo",
            "youtubeId": "vQerALNpNfo"
          },
          {
            "id": "integration-techniques-lesson-18",
            "title": "Integration by Tables",
            "url": "https://www.youtube.com/watch?v=p7KwXMyJK9s",
            "youtubeId": "p7KwXMyJK9s"
          },
          {
            "id": "integration-techniques-lesson-19",
            "title": "Integration of Special Rational Functions - Table of Integrals",
            "url": "https://www.youtube.com/watch?v=Zk3S8uv2O-I",
            "youtubeId": "Zk3S8uv2O-I"
          },
          {
            "id": "integration-techniques-lesson-20",
            "title": "Integration into Inverse Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=AE-0gXXx_j0",
            "youtubeId": "AE-0gXXx_j0"
          },
          {
            "id": "integration-techniques-lesson-21",
            "title": "Integral of Inverse Trigonometric Functions",
            "url": "https://www.youtube.com/watch?v=SZ3xj1UIrWc",
            "youtubeId": "SZ3xj1UIrWc"
          },
          {
            "id": "integration-techniques-lesson-22",
            "title": "Integral of Logarithmic Functions",
            "url": "https://www.youtube.com/watch?v=nrt37LoaSxM",
            "youtubeId": "nrt37LoaSxM"
          },
          {
            "id": "integration-techniques-lesson-23",
            "title": "Trapezoidal Rule",
            "url": "https://www.youtube.com/watch?v=Rn9Gr52zhrY",
            "youtubeId": "Rn9Gr52zhrY"
          },
          {
            "id": "integration-techniques-lesson-24",
            "title": "Simpson's Rule",
            "url": "https://www.youtube.com/watch?v=7EqRRuh-5Lk",
            "youtubeId": "7EqRRuh-5Lk"
          },
          {
            "id": "integration-techniques-lesson-25",
            "title": "Numerical Integration with Error Bounds",
            "url": "https://www.youtube.com/watch?v=aY6Y66cc4rE",
            "youtubeId": "aY6Y66cc4rE"
          },
          {
            "id": "integration-techniques-lesson-26",
            "title": "Improper Integrals",
            "url": "https://www.youtube.com/watch?v=ND9cEdfCFr0",
            "youtubeId": "ND9cEdfCFr0"
          }
        ]
      },
      {
        "id": "more-integration-applications",
        "title": "More Applications of Integration",
        "url": "https://www.video-tutor.net/more-integration-applications.html",
        "lessons": [
          {
            "id": "more-integration-applications-lesson-1",
            "title": "Arc Length",
            "url": "https://www.youtube.com/watch?v=DNDAwWIL5FY",
            "youtubeId": "DNDAwWIL5FY"
          },
          {
            "id": "more-integration-applications-lesson-2",
            "title": "Surface Area of Revolution",
            "url": "https://www.youtube.com/watch?v=lQM-0Nqs9Pg",
            "youtubeId": "lQM-0Nqs9Pg"
          },
          {
            "id": "more-integration-applications-lesson-3",
            "title": "Centroid, Moment, and Center of Mass",
            "url": "https://www.youtube.com/watch?v=JSGlBHAGvy4",
            "youtubeId": "JSGlBHAGvy4"
          },
          {
            "id": "more-integration-applications-lesson-4",
            "title": "Center of Mass, Moment, and Centroid - More Problems",
            "url": "https://www.youtube.com/watch?v=SWu_i-19Rn0",
            "youtubeId": "SWu_i-19Rn0"
          },
          {
            "id": "more-integration-applications-lesson-5",
            "title": "Hydrostatic Force Problems",
            "url": "https://www.youtube.com/watch?v=3jG-hWgUJko",
            "youtubeId": "3jG-hWgUJko"
          },
          {
            "id": "more-integration-applications-lesson-6",
            "title": "Probability Density Functions",
            "url": "https://www.youtube.com/watch?v=QKA4HNEw3aY",
            "youtubeId": "QKA4HNEw3aY"
          },
          {
            "id": "more-integration-applications-lesson-7",
            "title": "Normal Distribution and Probability - Problems",
            "url": "https://www.youtube.com/watch?v=gHBL5Zau3NE",
            "youtubeId": "gHBL5Zau3NE"
          }
        ]
      },
      {
        "id": "differential-equations",
        "title": "Differential Equations",
        "url": "https://www.video-tutor.net/differential-equations.html",
        "lessons": [
          {
            "id": "differential-equations-lesson-1",
            "title": "The Initial Value Problem",
            "url": "https://www.youtube.com/watch?v=kwGukY_2qWQ",
            "youtubeId": "kwGukY_2qWQ"
          },
          {
            "id": "differential-equations-lesson-2",
            "title": "Separable First Order Differential Equations",
            "url": "https://www.youtube.com/watch?v=C7nuJcJriWM",
            "youtubeId": "C7nuJcJriWM"
          },
          {
            "id": "differential-equations-lesson-3",
            "title": "Slope Fields",
            "url": "https://www.youtube.com/watch?v=Wr9VOum9Co0",
            "youtubeId": "Wr9VOum9Co0"
          },
          {
            "id": "differential-equations-lesson-4",
            "title": "Exponential Growth and Decay",
            "url": "https://www.youtube.com/watch?v=M9rcYTuFG4w",
            "youtubeId": "M9rcYTuFG4w"
          },
          {
            "id": "differential-equations-lesson-5",
            "title": "Newton's Law of Cooling",
            "url": "https://www.youtube.com/watch?v=ejEXSjdMpck",
            "youtubeId": "ejEXSjdMpck"
          },
          {
            "id": "differential-equations-lesson-6",
            "title": "The Logistic Growth Equation",
            "url": "https://www.youtube.com/watch?v=JgMvB22XQs0",
            "youtubeId": "JgMvB22XQs0"
          },
          {
            "id": "differential-equations-lesson-7",
            "title": "Euler's Method - Differential Equations",
            "url": "https://www.youtube.com/watch?v=ukNbG7muKho",
            "youtubeId": "ukNbG7muKho"
          },
          {
            "id": "differential-equations-lesson-8",
            "title": "Homogeneous Differential Equations",
            "url": "https://www.youtube.com/watch?v=ZEJVyybsiT4",
            "youtubeId": "ZEJVyybsiT4"
          },
          {
            "id": "differential-equations-lesson-9",
            "title": "First Order Linear Differential Equations",
            "url": "https://www.youtube.com/watch?v=gd1FYn86P0c",
            "youtubeId": "gd1FYn86P0c"
          },
          {
            "id": "differential-equations-lesson-10",
            "title": "Bernoulli's Equation for Differential Equations",
            "url": "https://www.youtube.com/watch?v=BoI_ej-T0V4",
            "youtubeId": "BoI_ej-T0V4"
          }
        ]
      },
      {
        "id": "parametric-equations-and-polar-coordinates",
        "title": "Parametric Equations",
        "url": "https://www.video-tutor.net/parametric-equations-and-polar-coordinates.html",
        "lessons": [
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-1",
            "title": "Introduction to Parametric Equations",
            "url": "https://www.youtube.com/watch?v=97pe-QlSGqA",
            "youtubeId": "97pe-QlSGqA"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-2",
            "title": "Derivatives of Parametric Functions",
            "url": "https://www.youtube.com/watch?v=kf2dZWqLnqE",
            "youtubeId": "kf2dZWqLnqE"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-3",
            "title": "Tangent Lines of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=vcZPjuG8GrM",
            "youtubeId": "vcZPjuG8GrM"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-4",
            "title": "Second Derivatives of Parametric Equations with Concavity",
            "url": "https://www.youtube.com/watch?v=93IdxRdd5eg",
            "youtubeId": "93IdxRdd5eg"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-5",
            "title": "Third Derivative of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=CZKl9C0_gMw",
            "youtubeId": "CZKl9C0_gMw"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-6",
            "title": "Horizontal and Vertical Tangent Lines of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=jD2RIjbv1Us",
            "youtubeId": "jD2RIjbv1Us"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-7",
            "title": "Area of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=riEx7TcLfzk",
            "youtubeId": "riEx7TcLfzk"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-8",
            "title": "Arc Length of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=X8N21DrWmjU",
            "youtubeId": "X8N21DrWmjU"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-9",
            "title": "Surface Area of Parametric Curves",
            "url": "https://www.youtube.com/watch?v=USiKDtILhmc",
            "youtubeId": "USiKDtILhmc"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-10",
            "title": "Introduction to Polar Coordinates",
            "url": "https://www.youtube.com/watch?v=aSdaT62ndYE",
            "youtubeId": "aSdaT62ndYE"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-11",
            "title": "Polar Equations to Rectangular Equations",
            "url": "https://www.youtube.com/watch?v=flTz_pSzVFI",
            "youtubeId": "flTz_pSzVFI"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-12",
            "title": "Rectangular Equations to Polar Equations",
            "url": "https://www.youtube.com/watch?v=fTBkr27r3pw",
            "youtubeId": "fTBkr27r3pw"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-13",
            "title": "How to Graph Polar Equations",
            "url": "https://www.youtube.com/watch?v=jO4lwddfeDA",
            "youtubeId": "jO4lwddfeDA"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-14",
            "title": "Tangent Line Equations in Polar Form",
            "url": "https://www.youtube.com/watch?v=ImtzLh8KhIE",
            "youtubeId": "ImtzLh8KhIE"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-15",
            "title": "Horizontal and Vertical Tangent Lines in Polar Form",
            "url": "https://www.youtube.com/watch?v=EVemXHWbqWI",
            "youtubeId": "EVemXHWbqWI"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-16",
            "title": "Finding the Area Using Polar Coordinates",
            "url": "https://www.youtube.com/watch?v=GQ6cDvY8K9g",
            "youtubeId": "GQ6cDvY8K9g"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-17",
            "title": "Finding the Area Bounded by Two Polar Curves",
            "url": "https://www.youtube.com/watch?v=TwKxDApaxVo",
            "youtubeId": "TwKxDApaxVo"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-18",
            "title": "Arc Length of Polar Curves",
            "url": "https://www.youtube.com/watch?v=bxswSV1utxg",
            "youtubeId": "bxswSV1utxg"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-19",
            "title": "Surface Area of Polar Curves",
            "url": "https://www.youtube.com/watch?v=n-Zg7WgRzjA",
            "youtubeId": "n-Zg7WgRzjA"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-20",
            "title": "How to Graph and Write Equations of Ellipses",
            "url": "https://www.youtube.com/watch?v=OPSCKXXvWiM",
            "youtubeId": "OPSCKXXvWiM"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-21",
            "title": "How to Graph and Write Equations of Hyperbolas",
            "url": "https://www.youtube.com/watch?v=Iu-4-fizlD4",
            "youtubeId": "Iu-4-fizlD4"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-22",
            "title": "How to Graph and Write Equations of Parabolas",
            "url": "https://www.youtube.com/watch?v=KYgmOTLbuqE",
            "youtubeId": "KYgmOTLbuqE"
          },
          {
            "id": "parametric-equations-and-polar-coordinates-lesson-23",
            "title": "Polar Equations of Conic Sections",
            "url": "https://www.youtube.com/watch?v=rnvCG_BZcL4",
            "youtubeId": "rnvCG_BZcL4"
          }
        ]
      },
      {
        "id": "series-and-sequences",
        "title": "Sequences and Series",
        "url": "https://www.video-tutor.net/series-and-sequences.html",
        "lessons": [
          {
            "id": "series-and-sequences-lesson-1",
            "title": "Converging and Diverging Sequences Using Limits",
            "url": "https://www.youtube.com/watch?v=XdkoTb8PEG0",
            "youtubeId": "XdkoTb8PEG0"
          },
          {
            "id": "series-and-sequences-lesson-2",
            "title": "Monotonic Sequences and Bounded Sequences",
            "url": "https://www.youtube.com/watch?v=tHy3TXmZpF0",
            "youtubeId": "tHy3TXmZpF0"
          },
          {
            "id": "series-and-sequences-lesson-3",
            "title": "Absolute Value Theorem for Sequences",
            "url": "https://www.youtube.com/watch?v=kH5Zqg5j-3M",
            "youtubeId": "kH5Zqg5j-3M"
          },
          {
            "id": "series-and-sequences-lesson-4",
            "title": "Squeeze Theorem for Sequences",
            "url": "https://www.youtube.com/watch?v=21loY9MBK3A",
            "youtubeId": "21loY9MBK3A"
          },
          {
            "id": "series-and-sequences-lesson-5",
            "title": "Geometric Sequences and Series",
            "url": "https://www.youtube.com/watch?v=zRKZ0-kOUZM",
            "youtubeId": "zRKZ0-kOUZM"
          },
          {
            "id": "series-and-sequences-lesson-6",
            "title": "The Sum of a Finite Geometric Series",
            "url": "https://www.youtube.com/watch?v=uAnJmAFBpak",
            "youtubeId": "uAnJmAFBpak"
          },
          {
            "id": "series-and-sequences-lesson-7",
            "title": "The Sum of an Infinite Geometric Series",
            "url": "https://www.youtube.com/watch?v=jxRqRLMliPc",
            "youtubeId": "jxRqRLMliPc"
          },
          {
            "id": "series-and-sequences-lesson-8",
            "title": "Converging and Diverging Series",
            "url": "https://www.youtube.com/watch?v=zg9N2gAf6a4",
            "youtubeId": "zg9N2gAf6a4"
          },
          {
            "id": "series-and-sequences-lesson-9",
            "title": "Divergence Test for Series",
            "url": "https://www.youtube.com/watch?v=nC_IU1IzzS4",
            "youtubeId": "nC_IU1IzzS4"
          },
          {
            "id": "series-and-sequences-lesson-10",
            "title": "Harmonic Series",
            "url": "https://www.youtube.com/watch?v=OqBZCycIYfw",
            "youtubeId": "OqBZCycIYfw"
          },
          {
            "id": "series-and-sequences-lesson-11",
            "title": "Telescoping Series",
            "url": "https://www.youtube.com/watch?v=XVkdhU6nJbo",
            "youtubeId": "XVkdhU6nJbo"
          },
          {
            "id": "series-and-sequences-lesson-12",
            "title": "The Integral Test",
            "url": "https://www.youtube.com/watch?v=f9SJz4-UaQQ",
            "youtubeId": "f9SJz4-UaQQ"
          },
          {
            "id": "series-and-sequences-lesson-13",
            "title": "Remainder Estimate for the Integral Test",
            "url": "https://www.youtube.com/watch?v=vaU5DDcTfZk",
            "youtubeId": "vaU5DDcTfZk"
          },
          {
            "id": "series-and-sequences-lesson-14",
            "title": "The P-Series",
            "url": "https://www.youtube.com/watch?v=x621rtIwb_4",
            "youtubeId": "x621rtIwb_4"
          },
          {
            "id": "series-and-sequences-lesson-15",
            "title": "The Direct Comparison Test",
            "url": "https://www.youtube.com/watch?v=oZtAgihok5s",
            "youtubeId": "oZtAgihok5s"
          },
          {
            "id": "series-and-sequences-lesson-16",
            "title": "The Limit Comparison Test",
            "url": "https://www.youtube.com/watch?v=LBxYQ0TJxYM",
            "youtubeId": "LBxYQ0TJxYM"
          },
          {
            "id": "series-and-sequences-lesson-17",
            "title": "Alternating Series Test",
            "url": "https://www.youtube.com/watch?v=DRO1kPT4iS8",
            "youtubeId": "DRO1kPT4iS8"
          },
          {
            "id": "series-and-sequences-lesson-18",
            "title": "Alternating Series Estimation Theorem",
            "url": "https://www.youtube.com/watch?v=FkUrAgBzAZo",
            "youtubeId": "FkUrAgBzAZo"
          },
          {
            "id": "series-and-sequences-lesson-19",
            "title": "Absolute Convergence, Conditional Convergence, and Divergence",
            "url": "https://www.youtube.com/watch?v=FPK6LO1iiXc",
            "youtubeId": "FPK6LO1iiXc"
          },
          {
            "id": "series-and-sequences-lesson-20",
            "title": "The Ratio Test",
            "url": "https://www.youtube.com/watch?v=kkfILYpkJS8",
            "youtubeId": "kkfILYpkJS8"
          },
          {
            "id": "series-and-sequences-lesson-21",
            "title": "The Root Test",
            "url": "https://www.youtube.com/watch?v=ahf0eXOll1M",
            "youtubeId": "ahf0eXOll1M"
          },
          {
            "id": "series-and-sequences-lesson-22",
            "title": "Series Review",
            "url": "https://www.youtube.com/watch?v=0YeON4p0ogw",
            "youtubeId": "0YeON4p0ogw"
          },
          {
            "id": "series-and-sequences-lesson-23",
            "title": "Taylor and Maclaurin Polynomials",
            "url": "https://www.youtube.com/watch?v=urPIxvNBXF0",
            "youtubeId": "urPIxvNBXF0"
          },
          {
            "id": "series-and-sequences-lesson-24",
            "title": "Taylor's Remainder Theorem",
            "url": "https://www.youtube.com/watch?v=lY0LzJXTgeo",
            "youtubeId": "lY0LzJXTgeo"
          },
          {
            "id": "series-and-sequences-lesson-25",
            "title": "Finding the Radius and Interval of Convergence - Power Series",
            "url": "https://www.youtube.com/watch?v=EGni2-m5yxM",
            "youtubeId": "EGni2-m5yxM"
          },
          {
            "id": "series-and-sequences-lesson-26",
            "title": "Power Series - Differentiation and Integration",
            "url": "https://www.youtube.com/watch?v=nD6hai32ykQ",
            "youtubeId": "nD6hai32ykQ"
          },
          {
            "id": "series-and-sequences-lesson-27",
            "title": "Power Series - Representation of Functions",
            "url": "https://www.youtube.com/watch?v=54yldObvvwY",
            "youtubeId": "54yldObvvwY"
          },
          {
            "id": "series-and-sequences-lesson-28",
            "title": "Finding the Power Series by Differentiation",
            "url": "https://www.youtube.com/watch?v=PmHaNjDBh_c",
            "youtubeId": "PmHaNjDBh_c"
          },
          {
            "id": "series-and-sequences-lesson-29",
            "title": "Power Series Representation by Integration",
            "url": "https://www.youtube.com/watch?v=0HyM3nM87mk",
            "youtubeId": "0HyM3nM87mk"
          },
          {
            "id": "series-and-sequences-lesson-30",
            "title": "Power Series Representation with Natural Logarithms",
            "url": "https://www.youtube.com/watch?v=A6JdlY52NFg",
            "youtubeId": "A6JdlY52NFg"
          },
          {
            "id": "series-and-sequences-lesson-31",
            "title": "Taylor and Maclaurin Series",
            "url": "https://www.youtube.com/watch?v=LDBnS4c7YbA",
            "youtubeId": "LDBnS4c7YbA"
          },
          {
            "id": "series-and-sequences-lesson-32",
            "title": "The Binomial Series",
            "url": "https://www.youtube.com/watch?v=V1AKAkGJlN8",
            "youtubeId": "V1AKAkGJlN8"
          }
        ]
      },
      {
        "id": "calculus-2-final-exam-review",
        "title": "Calculus 2 Review",
        "url": "https://www.video-tutor.net/calculus-2-final-exam-review.html",
        "lessons": [
          {
            "id": "calculus-2-final-exam-review-lesson-1",
            "title": "9 Test Questions",
            "url": "https://www.youtube.com/watch?v=3RwUIP9pMSo",
            "youtubeId": "3RwUIP9pMSo"
          }
        ]
      },
      {
        "id": "vector-calculus",
        "title": "Vectors",
        "url": "https://www.video-tutor.net/vector-calculus.html",
        "lessons": [
          {
            "id": "vector-calculus-lesson-1",
            "title": "Plotting Points in a Three-Dimensional Coordinate System",
            "url": "https://www.youtube.com/watch?v=EzJP9uwV3ms",
            "youtubeId": "EzJP9uwV3ms"
          },
          {
            "id": "vector-calculus-lesson-2",
            "title": "How to Find the Distance Between 2 Points in 3D Space",
            "url": "https://www.youtube.com/watch?v=0c6cP2zLC2c",
            "youtubeId": "0c6cP2zLC2c"
          },
          {
            "id": "vector-calculus-lesson-3",
            "title": "The Equation of a Sphere",
            "url": "https://www.youtube.com/watch?v=9DyPyJb2N9g",
            "youtubeId": "9DyPyJb2N9g"
          },
          {
            "id": "vector-calculus-lesson-4",
            "title": "Introduction to Vectors",
            "url": "https://www.youtube.com/watch?v=2_21erD-nBg",
            "youtubeId": "2_21erD-nBg"
          },
          {
            "id": "vector-calculus-lesson-5",
            "title": "The Dot Product",
            "url": "https://www.youtube.com/watch?v=Te8eL5r7aJs",
            "youtubeId": "Te8eL5r7aJs"
          },
          {
            "id": "vector-calculus-lesson-6",
            "title": "Finding the Angle Between Two Vectors",
            "url": "https://www.youtube.com/watch?v=dYPRYO8QhxU",
            "youtubeId": "dYPRYO8QhxU"
          },
          {
            "id": "vector-calculus-lesson-7",
            "title": "Are The Two Vectors Parallel, Orthogonal, or Neither?",
            "url": "https://www.youtube.com/watch?v=8fIZ2v-33xw",
            "youtubeId": "8fIZ2v-33xw"
          },
          {
            "id": "vector-calculus-lesson-8",
            "title": "Direction Cosines and Direction Angles of a Vector",
            "url": "https://www.youtube.com/watch?v=ZoCxUV893fo",
            "youtubeId": "ZoCxUV893fo"
          },
          {
            "id": "vector-calculus-lesson-9",
            "title": "Vector Projections and Orthogonal Components",
            "url": "https://www.youtube.com/watch?v=Rw70zkvqEiE",
            "youtubeId": "Rw70zkvqEiE"
          },
          {
            "id": "vector-calculus-lesson-10",
            "title": "The Cross Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=pWbOisq1MJU",
            "youtubeId": "pWbOisq1MJU"
          },
          {
            "id": "vector-calculus-lesson-11",
            "title": "Area of a Parallelogram Using Two Vectors",
            "url": "https://www.youtube.com/watch?v=YbZmAqGUkqc",
            "youtubeId": "YbZmAqGUkqc"
          },
          {
            "id": "vector-calculus-lesson-12",
            "title": "Volume of a Parallelepiped Using the Triple Scalar Product",
            "url": "https://www.youtube.com/watch?v=6NeAK0rJwlk",
            "youtubeId": "6NeAK0rJwlk"
          },
          {
            "id": "vector-calculus-lesson-13",
            "title": "Vector, Symmetric, and Parametric Equations",
            "url": "https://www.youtube.com/watch?v=MkjazYnvNP8",
            "youtubeId": "MkjazYnvNP8"
          },
          {
            "id": "vector-calculus-lesson-14",
            "title": "How to Find the Equation of a Plane",
            "url": "https://www.youtube.com/watch?v=2sZKZHyaQJ8",
            "youtubeId": "2sZKZHyaQJ8"
          },
          {
            "id": "vector-calculus-lesson-15",
            "title": "How to Find the Equation of a Plane Given Three Points",
            "url": "https://www.youtube.com/watch?v=rL9UXzZYYo4",
            "youtubeId": "rL9UXzZYYo4"
          },
          {
            "id": "vector-calculus-lesson-16",
            "title": "How to Find the Point Where a Line Intersects a Plane",
            "url": "https://www.youtube.com/watch?v=_W3aVWsMp14",
            "youtubeId": "_W3aVWsMp14"
          },
          {
            "id": "vector-calculus-lesson-17",
            "title": "How to Find the Angle Between Two Planes",
            "url": "https://www.youtube.com/watch?v=7G07dPSlWbY",
            "youtubeId": "7G07dPSlWbY"
          },
          {
            "id": "vector-calculus-lesson-18",
            "title": "How to Find the Distance Between a Point and a Plane",
            "url": "https://www.youtube.com/watch?v=zWMTTRJ0l4w",
            "youtubeId": "zWMTTRJ0l4w"
          }
        ]
      },
    ]
  },
  {
    "id": "general-chemistry",
    "title": "General Chemistry",
    "url": "https://www.video-tutor.net/general-chemistry.html",
    "chapters": [
      {
        "id": "chemistry-fundamentals",
        "title": "Chemistry Fundamentals",
        "url": "https://www.video-tutor.net/chemistry-fundamentals.html",
        "lessons": [
          {
            "id": "chemistry-fundamentals-lesson-1",
            "title": "Unit Conversion Review",
            "url": "https://www.youtube.com/watch?v=eK8gXP3pImU",
            "youtubeId": "eK8gXP3pImU"
          },
          {
            "id": "chemistry-fundamentals-lesson-3",
            "title": "Scientific Notation - Fast Review!",
            "url": "https://www.youtube.com/watch?v=ZtB0vJMGve4",
            "youtubeId": "ZtB0vJMGve4"
          },
          {
            "id": "chemistry-fundamentals-lesson-4",
            "title": "Scientific Notation - Addition and Subtraction",
            "url": "https://www.youtube.com/watch?v=XHds0Uf1zHA",
            "youtubeId": "XHds0Uf1zHA"
          },
          {
            "id": "chemistry-fundamentals-lesson-5",
            "title": "Scientific Notation - Multiplication and Division",
            "url": "https://www.youtube.com/watch?v=yX6Mq9whsX0",
            "youtubeId": "yX6Mq9whsX0"
          },
          {
            "id": "chemistry-fundamentals-lesson-6",
            "title": "Significant Figures - A Fast Review!",
            "url": "https://www.youtube.com/watch?v=l2yuDvwYq5g",
            "youtubeId": "l2yuDvwYq5g"
          },
          {
            "id": "chemistry-fundamentals-lesson-7",
            "title": "How to Round Numbers Using Significant Figures",
            "url": "https://www.youtube.com/watch?v=fxdYta_Olv0",
            "youtubeId": "fxdYta_Olv0"
          },
          {
            "id": "chemistry-fundamentals-lesson-8",
            "title": "Accuracy and Precision",
            "url": "https://www.youtube.com/watch?v=0IiHPKAvo7g",
            "youtubeId": "0IiHPKAvo7g"
          },
          {
            "id": "chemistry-fundamentals-lesson-9",
            "title": "Density Practice Problems",
            "url": "https://www.youtube.com/watch?v=9CKDQE35qXQ",
            "youtubeId": "9CKDQE35qXQ"
          },
          {
            "id": "chemistry-fundamentals-lesson-10",
            "title": "Temperature Conversions",
            "url": "https://www.youtube.com/watch?v=G7sRfdAq4M8",
            "youtubeId": "G7sRfdAq4M8"
          },
          {
            "id": "chemistry-fundamentals-lesson-11",
            "title": "Intensive and Extensive Properties",
            "url": "https://www.youtube.com/watch?v=da0T6iWA0us",
            "youtubeId": "da0T6iWA0us"
          },
          {
            "id": "chemistry-fundamentals-lesson-12",
            "title": "Types of Matter - Overview",
            "url": "https://www.youtube.com/watch?v=TR2iR3CZLcw",
            "youtubeId": "TR2iR3CZLcw"
          },
          {
            "id": "chemistry-fundamentals-lesson-13",
            "title": "Classification of Matter -Examples",
            "url": "https://www.youtube.com/watch?v=OHhnm2p5G3o",
            "youtubeId": "OHhnm2p5G3o"
          },
          {
            "id": "chemistry-fundamentals-lesson-14",
            "title": "Homogeneous and Heterogeneous Mixtures",
            "url": "https://www.youtube.com/watch?v=eI-tmv4DLEk",
            "youtubeId": "eI-tmv4DLEk"
          },
          {
            "id": "chemistry-fundamentals-lesson-15",
            "title": "Physical and Chemical Changes",
            "url": "https://www.youtube.com/watch?v=YE2xaMsoGFU",
            "youtubeId": "YE2xaMsoGFU"
          },
          {
            "id": "chemistry-fundamentals-lesson-16",
            "title": "States of Matter - Solids, Liquids, and Gases",
            "url": "https://www.youtube.com/watch?v=9TVOlTolKFA",
            "youtubeId": "9TVOlTolKFA"
          },
          {
            "id": "chemistry-fundamentals-lesson-17",
            "title": "Physical vs Chemical Properties",
            "url": "https://www.youtube.com/watch?v=gH1R87ahFvA",
            "youtubeId": "gH1R87ahFvA"
          }
        ]
      },
      {
        "id": "atoms-ions-and-molecules",
        "title": "Atoms, Ions, and Molecules",
        "url": "https://www.video-tutor.net/atoms-ions-and-molecules.html",
        "lessons": [
          {
            "id": "atoms-ions-and-molecules-lesson-1",
            "title": "Law of Conservation of Mass",
            "url": "https://www.youtube.com/watch?v=eBTNzScLUg4",
            "youtubeId": "eBTNzScLUg4"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-2",
            "title": "Law of Definite Proportions",
            "url": "https://www.youtube.com/watch?v=ly0ywRdVG_M",
            "youtubeId": "ly0ywRdVG_M"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-3",
            "title": "Law of Multiple Proportions",
            "url": "https://www.youtube.com/watch?v=sxE95VOY-YY",
            "youtubeId": "sxE95VOY-YY"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-4",
            "title": "Dalton's Atomic Theory",
            "url": "https://www.youtube.com/watch?v=rbmPpgASUAY",
            "youtubeId": "rbmPpgASUAY"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-5",
            "title": "Rutherford's Gold Foil Experiment",
            "url": "https://www.youtube.com/watch?v=sNQsdrqsD_s",
            "youtubeId": "sNQsdrqsD_s"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-6",
            "title": "The Cathode Ray Tube Experiment",
            "url": "https://www.youtube.com/watch?v=i6zyPOSreCg",
            "youtubeId": "i6zyPOSreCg"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-7",
            "title": "Introduction to Atoms",
            "url": "https://www.youtube.com/watch?v=acdkMeEKCNQ",
            "youtubeId": "acdkMeEKCNQ"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-8",
            "title": "Cations and Anions",
            "url": "https://www.youtube.com/watch?v=aAV2DMAI5f8",
            "youtubeId": "aAV2DMAI5f8"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-9",
            "title": "Diatomic Elements and Molecules",
            "url": "https://www.youtube.com/watch?v=gi337Mx7wTc",
            "youtubeId": "gi337Mx7wTc"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-10",
            "title": "Elements, Atoms, Molecules, Ions, Ionic & Molecular Compounds",
            "url": "https://www.youtube.com/watch?v=pSJeMJaCkVU",
            "youtubeId": "pSJeMJaCkVU"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-11",
            "title": "How to Calculate the Number of Protons, Neutrons, and Electrons",
            "url": "https://www.youtube.com/watch?v=65dDZulPhtg",
            "youtubeId": "65dDZulPhtg"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-12",
            "title": "Atomic Number, Mass Number, and Net Electric Charge",
            "url": "https://www.youtube.com/watch?v=f3cmIZSCIEI",
            "youtubeId": "f3cmIZSCIEI"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-13",
            "title": "How to Calculate the Average Atomic Mass",
            "url": "https://www.youtube.com/watch?v=JT18bDAadQ0",
            "youtubeId": "JT18bDAadQ0"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-14",
            "title": "What are Isotopes?",
            "url": "https://www.youtube.com/watch?v=bagegEZBtOs",
            "youtubeId": "bagegEZBtOs"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-15",
            "title": "How to Find the Percent Abundance of Each Isotope",
            "url": "https://www.youtube.com/watch?v=w-WhwWNC8-Q",
            "youtubeId": "w-WhwWNC8-Q"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-16",
            "title": "What is an Ion?",
            "url": "https://www.youtube.com/watch?v=ALNSIAnm-EQ",
            "youtubeId": "ALNSIAnm-EQ"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-17",
            "title": "The Periodic Table",
            "url": "https://www.youtube.com/watch?v=okolv1y6IlE",
            "youtubeId": "okolv1y6IlE"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-18",
            "title": "How to Determine the Charges of Ions",
            "url": "https://www.youtube.com/watch?v=ieoz7YMb330",
            "youtubeId": "ieoz7YMb330"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-19",
            "title": "How to Memorize the Periodic Table Through Practice!",
            "url": "https://www.youtube.com/watch?v=ouOIhbiP5wk",
            "youtubeId": "ouOIhbiP5wk"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-20",
            "title": "Ionic and Covalent Bonding",
            "url": "https://www.youtube.com/watch?v=uDFLHTDJ4XA",
            "youtubeId": "uDFLHTDJ4XA"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-21",
            "title": "How to Name Molecular Compounds",
            "url": "https://www.youtube.com/watch?v=3agUL7-ezXk",
            "youtubeId": "3agUL7-ezXk"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-22",
            "title": "Writing Chemical Formulas for Molecular Compounds",
            "url": "https://www.youtube.com/watch?v=KrJnnwLDY6o",
            "youtubeId": "KrJnnwLDY6o"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-23",
            "title": "How to Memorize the Polyatomic Ions",
            "url": "https://www.youtube.com/watch?v=FXBEh7nd9KQ",
            "youtubeId": "FXBEh7nd9KQ"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-24",
            "title": "Organic Polyatomic Ions",
            "url": "https://www.youtube.com/watch?v=f_P_40VO8uE",
            "youtubeId": "f_P_40VO8uE"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-25",
            "title": "How to Name Ionic Compounds in Chemistry",
            "url": "https://www.youtube.com/watch?v=5rSgduXqhhU",
            "youtubeId": "5rSgduXqhhU"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-26",
            "title": "How to Name Ionic Compounds with Transition Metals",
            "url": "https://www.youtube.com/watch?v=eM5mDnQX0k8",
            "youtubeId": "eM5mDnQX0k8"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-27",
            "title": "Writing Chemical Formulas for Ionic Compounds",
            "url": "https://www.youtube.com/watch?v=GJ4Mds0CWLE",
            "youtubeId": "GJ4Mds0CWLE"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-28",
            "title": "How to Write Ionic Formulas with Polyatomic Ions",
            "url": "https://www.youtube.com/watch?v=stu2omPRvbs",
            "youtubeId": "stu2omPRvbs"
          },
          {
            "id": "atoms-ions-and-molecules-lesson-29",
            "title": "Naming Acids in Chemistry",
            "url": "https://www.youtube.com/watch?v=r7PfTMAFYgs",
            "youtubeId": "r7PfTMAFYgs"
          }
        ]
      },
      {
        "id": "stoichiometry",
        "title": "Stoichiometry",
        "url": "https://www.video-tutor.net/stoichiometry.html",
        "lessons": [
          {
            "id": "stoichiometry-lesson-1",
            "title": "Introduction to Moles",
            "url": "https://www.youtube.com/watch?v=EowJsC7phzw",
            "youtubeId": "EowJsC7phzw"
          },
          {
            "id": "stoichiometry-lesson-2",
            "title": "How to Calculate the Molar Mass of a Compound",
            "url": "https://www.youtube.com/watch?v=c_zHROisdP4",
            "youtubeId": "c_zHROisdP4"
          },
          {
            "id": "stoichiometry-lesson-3",
            "title": "How to Convert Grams to Moles",
            "url": "https://www.youtube.com/watch?v=irYPta9G_sw",
            "youtubeId": "irYPta9G_sw"
          },
          {
            "id": "stoichiometry-lesson-4",
            "title": "How to Convert Moles to Grams",
            "url": "https://www.youtube.com/watch?v=Bj3fr5pEn7U",
            "youtubeId": "Bj3fr5pEn7U"
          },
          {
            "id": "stoichiometry-lesson-5",
            "title": "How to Convert from Grams to Milligrams",
            "url": "https://www.youtube.com/watch?v=ZheOYv2e5wo",
            "youtubeId": "ZheOYv2e5wo"
          },
          {
            "id": "stoichiometry-lesson-6",
            "title": "Moles to Atoms",
            "url": "https://www.youtube.com/watch?v=mpHQZ1PrkUI",
            "youtubeId": "mpHQZ1PrkUI"
          },
          {
            "id": "stoichiometry-lesson-7",
            "title": "Grams to Molecules and Molecules to Grams",
            "url": "https://www.youtube.com/watch?v=Ch16s4kYH1Q",
            "youtubeId": "Ch16s4kYH1Q"
          },
          {
            "id": "stoichiometry-lesson-8",
            "title": "How to Convert Grams to Atoms",
            "url": "https://www.youtube.com/watch?v=RFCtPjZ4Vzk",
            "youtubeId": "RFCtPjZ4Vzk"
          },
          {
            "id": "stoichiometry-lesson-9",
            "title": "Atoms to Grams",
            "url": "https://www.youtube.com/watch?v=i1EPgeu_fJ8",
            "youtubeId": "i1EPgeu_fJ8"
          },
          {
            "id": "stoichiometry-lesson-10",
            "title": "How to Balance Chemical Equations",
            "url": "https://www.youtube.com/watch?v=iUARzSxcKzk",
            "youtubeId": "iUARzSxcKzk"
          },
          {
            "id": "stoichiometry-lesson-11",
            "title": "Molar Ratio Problems",
            "url": "https://www.youtube.com/watch?v=3zmeVamEsWI",
            "youtubeId": "3zmeVamEsWI"
          },
          {
            "id": "stoichiometry-lesson-12",
            "title": "Basic Stoichiometry Problems",
            "url": "https://www.youtube.com/watch?v=7Cfq0ilw7ps",
            "youtubeId": "7Cfq0ilw7ps"
          },
          {
            "id": "stoichiometry-lesson-13",
            "title": "Stoichiometry - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=74-X94OP2XI",
            "youtubeId": "74-X94OP2XI"
          },
          {
            "id": "stoichiometry-lesson-14",
            "title": "Limiting Reactant Practice Problems",
            "url": "https://www.youtube.com/watch?v=IWtkhAv4RTo",
            "youtubeId": "IWtkhAv4RTo"
          },
          {
            "id": "stoichiometry-lesson-15",
            "title": "How to Find the Amount of Excess Reactant That is Left Over",
            "url": "https://www.youtube.com/watch?v=-7UloVZFG00",
            "youtubeId": "-7UloVZFG00"
          },
          {
            "id": "stoichiometry-lesson-16",
            "title": "How to Calculate the Theoretical Yield and Percent Yield",
            "url": "https://www.youtube.com/watch?v=hhEfqa_x7RQ",
            "youtubeId": "hhEfqa_x7RQ"
          },
          {
            "id": "stoichiometry-lesson-17",
            "title": "How to Calculate the Actual Yield",
            "url": "https://www.youtube.com/watch?v=w1njGAkc8og",
            "youtubeId": "w1njGAkc8og"
          },
          {
            "id": "stoichiometry-lesson-18",
            "title": "Percent Error",
            "url": "https://www.youtube.com/watch?v=JbEo46uV6d4",
            "youtubeId": "JbEo46uV6d4"
          },
          {
            "id": "stoichiometry-lesson-19",
            "title": "Percent Composition by Mass",
            "url": "https://www.youtube.com/watch?v=bGmbyztdCHE",
            "youtubeId": "bGmbyztdCHE"
          },
          {
            "id": "stoichiometry-lesson-20",
            "title": "Finding the Molecular and Empirical Formula from Mass Percent",
            "url": "https://www.youtube.com/watch?v=JeSSucG-CVw",
            "youtubeId": "JeSSucG-CVw"
          },
          {
            "id": "stoichiometry-lesson-21",
            "title": "Empirical Formula of a Hydrated Ionic Compound",
            "url": "https://www.youtube.com/watch?v=gl_QAO5y9Ig",
            "youtubeId": "gl_QAO5y9Ig"
          },
          {
            "id": "stoichiometry-lesson-22",
            "title": "Combustion Analysis",
            "url": "https://www.youtube.com/watch?v=uvR7zNJ1KoI",
            "youtubeId": "uvR7zNJ1KoI"
          },
          {
            "id": "stoichiometry-lesson-23",
            "title": "Stoichiometry Practice Problems",
            "url": "https://www.youtube.com/watch?v=mP2Yg8alyR0",
            "youtubeId": "mP2Yg8alyR0"
          }
        ]
      },
      {
        "id": "chemical-reactions-and-solution-stoichiometry",
        "title": "Solution Stoichiometry",
        "url": "https://www.video-tutor.net/chemical-reactions-and-solution-stoichiometry.html",
        "lessons": [
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-1",
            "title": "Solute, Solvent, and Solution",
            "url": "https://www.youtube.com/watch?v=MDHlaTHbEgM",
            "youtubeId": "MDHlaTHbEgM"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-2",
            "title": "Identifying Nonelectrolytes, Strong, and Weak Electrolytes",
            "url": "https://www.youtube.com/watch?v=2U2DBWWo6nc",
            "youtubeId": "2U2DBWWo6nc"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-3",
            "title": "Molarity Practice Problems",
            "url": "https://www.youtube.com/watch?v=o_iETsDSvkg",
            "youtubeId": "o_iETsDSvkg"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-4",
            "title": "How to Calculate Ion Concentration",
            "url": "https://www.youtube.com/watch?v=H5S4TRAzXhQ",
            "youtubeId": "H5S4TRAzXhQ"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-5",
            "title": "Dilution Problems",
            "url": "https://www.youtube.com/watch?v=FPidlCmymVg",
            "youtubeId": "FPidlCmymVg"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-6",
            "title": "Types of Chemical Reactions",
            "url": "https://www.youtube.com/watch?v=iIJD8RNLpS0",
            "youtubeId": "iIJD8RNLpS0"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-7",
            "title": "Solubility Rules",
            "url": "https://www.youtube.com/watch?v=LnGIKtx_udE",
            "youtubeId": "LnGIKtx_udE"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-8",
            "title": "Predicting the Products of Chemical Reactions",
            "url": "https://www.youtube.com/watch?v=MYmrWHzT1oI",
            "youtubeId": "MYmrWHzT1oI"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-9",
            "title": "Activity Series of Metals",
            "url": "https://www.youtube.com/watch?v=VatDpKMJ-BU",
            "youtubeId": "VatDpKMJ-BU"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-10",
            "title": "How to Tell if the Reaction Will Occur?",
            "url": "https://www.youtube.com/watch?v=ACSKrg2RBmY",
            "youtubeId": "ACSKrg2RBmY"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-11",
            "title": "Single Replacement Reactions",
            "url": "https://www.youtube.com/watch?v=s4OFBa7Uans",
            "youtubeId": "s4OFBa7Uans"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-12",
            "title": "Double Replacement Reactions",
            "url": "https://www.youtube.com/watch?v=d8vWIGf2mGE",
            "youtubeId": "d8vWIGf2mGE"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-13",
            "title": "Precipitation Reactions",
            "url": "https://www.youtube.com/watch?v=0jhNouV9TNo",
            "youtubeId": "0jhNouV9TNo"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-14",
            "title": "How to Write the Net Ionic Equation",
            "url": "https://www.youtube.com/watch?v=iOCEYIbJYTk",
            "youtubeId": "iOCEYIbJYTk"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-15",
            "title": "How to Write Chemical Equations from Word Descriptions",
            "url": "https://www.youtube.com/watch?v=npyvZSBqyc0",
            "youtubeId": "npyvZSBqyc0"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-16",
            "title": "Solution Stoichiometry",
            "url": "https://www.youtube.com/watch?v=Ab3wfKjaWWQ",
            "youtubeId": "Ab3wfKjaWWQ"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-17",
            "title": "Solution Stoichiometry - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=-4E6rOkiw2I",
            "youtubeId": "-4E6rOkiw2I"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-18",
            "title": "Acid Base Neutralization Reactions",
            "url": "https://www.youtube.com/watch?v=UfTJrAPjeys",
            "youtubeId": "UfTJrAPjeys"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-19",
            "title": "Acid-Base Titration Problems",
            "url": "https://www.youtube.com/watch?v=HJvALCcKYAc",
            "youtubeId": "HJvALCcKYAc"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-20",
            "title": "Mixture Problems",
            "url": "https://www.youtube.com/watch?v=e2FAAMlAJ3c",
            "youtubeId": "e2FAAMlAJ3c"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-21",
            "title": "How to Calculate Oxidation Numbers",
            "url": "https://www.youtube.com/watch?v=j0hI-a6EWWo",
            "youtubeId": "j0hI-a6EWWo"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-22",
            "title": "Oxidation and Reduction Reactions",
            "url": "https://www.youtube.com/watch?v=dF5lB7gRtcA",
            "youtubeId": "dF5lB7gRtcA"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-23",
            "title": "How to Find the Oxidizing and Reducing Agent",
            "url": "https://www.youtube.com/watch?v=HFgcCTCj1J4",
            "youtubeId": "HFgcCTCj1J4"
          },
          {
            "id": "chemical-reactions-and-solution-stoichiometry-lesson-24",
            "title": "How to Balance Redox Reactions Using the Half Reaction Method",
            "url": "https://www.youtube.com/watch?v=fdbrhQAM9Gw",
            "youtubeId": "fdbrhQAM9Gw"
          }
        ]
      },
      {
        "id": "gas-laws",
        "title": "The Gas Laws",
        "url": "https://www.video-tutor.net/gas-laws.html",
        "lessons": [
          {
            "id": "gas-laws-lesson-1",
            "title": "Introduction to Pressure",
            "url": "https://www.youtube.com/watch?v=6t50Gmo8tq0",
            "youtubeId": "6t50Gmo8tq0"
          },
          {
            "id": "gas-laws-lesson-2",
            "title": "Gas Pressure Unit Conversion",
            "url": "https://www.youtube.com/watch?v=JNOg1OsxMUw",
            "youtubeId": "JNOg1OsxMUw"
          },
          {
            "id": "gas-laws-lesson-3",
            "title": "Manometers and Barometers",
            "url": "https://www.youtube.com/watch?v=8P5NlpxGT7Y",
            "youtubeId": "8P5NlpxGT7Y"
          },
          {
            "id": "gas-laws-lesson-4",
            "title": "How to Calculate the Height of a fluid in a Barometer",
            "url": "https://www.youtube.com/watch?v=C6iFuluQvJk",
            "youtubeId": "C6iFuluQvJk"
          },
          {
            "id": "gas-laws-lesson-5",
            "title": "Gas Law Formulas",
            "url": "https://www.youtube.com/watch?v=W2g2iP83JoI",
            "youtubeId": "W2g2iP83JoI"
          },
          {
            "id": "gas-laws-lesson-6",
            "title": "Boyle's Law",
            "url": "https://www.youtube.com/watch?v=v8r_AU_TlPg",
            "youtubeId": "v8r_AU_TlPg"
          },
          {
            "id": "gas-laws-lesson-7",
            "title": "Charles Law",
            "url": "https://www.youtube.com/watch?v=uZ2d79NFx2w",
            "youtubeId": "uZ2d79NFx2w"
          },
          {
            "id": "gas-laws-lesson-8",
            "title": "Gay Lussac's Law",
            "url": "https://www.youtube.com/watch?v=RszgzH_2A9k",
            "youtubeId": "RszgzH_2A9k"
          },
          {
            "id": "gas-laws-lesson-9",
            "title": "Avogadro's Law - Practice Problems",
            "url": "https://www.youtube.com/watch?v=Czo2rIai5u0",
            "youtubeId": "Czo2rIai5u0"
          },
          {
            "id": "gas-laws-lesson-10",
            "title": "Ideal Gas Law - Practice Problems",
            "url": "https://www.youtube.com/watch?v=iaZ96KaQ44c",
            "youtubeId": "iaZ96KaQ44c"
          },
          {
            "id": "gas-laws-lesson-11",
            "title": "Combined Gas Law Problems",
            "url": "https://www.youtube.com/watch?v=pFaYMR2UAGE",
            "youtubeId": "pFaYMR2UAGE"
          },
          {
            "id": "gas-laws-lesson-12",
            "title": "Gas Stoichiometry Problems",
            "url": "https://www.youtube.com/watch?v=hPY7d6GUEV0",
            "youtubeId": "hPY7d6GUEV0"
          },
          {
            "id": "gas-laws-lesson-13",
            "title": "Molar Mass of a Gas at STP",
            "url": "https://www.youtube.com/watch?v=XTiR7F6FzNc",
            "youtubeId": "XTiR7F6FzNc"
          },
          {
            "id": "gas-laws-lesson-14",
            "title": "Gas Density and Molar Mass Problems at STP",
            "url": "https://www.youtube.com/watch?v=p8Mqx6CrDis",
            "youtubeId": "p8Mqx6CrDis"
          },
          {
            "id": "gas-laws-lesson-15",
            "title": "Dalton's Law of Partial Pressure",
            "url": "https://www.youtube.com/watch?v=J7YRwU7IV8Q",
            "youtubeId": "J7YRwU7IV8Q"
          },
          {
            "id": "gas-laws-lesson-16",
            "title": "Collecting Gas Over Water Problems",
            "url": "https://www.youtube.com/watch?v=1obOU5CxoQ4",
            "youtubeId": "1obOU5CxoQ4"
          },
          {
            "id": "gas-laws-lesson-17",
            "title": "Gas Density and Average Molar Mass",
            "url": "https://www.youtube.com/watch?v=OOD4Wg_TwX4",
            "youtubeId": "OOD4Wg_TwX4"
          },
          {
            "id": "gas-laws-lesson-18",
            "title": "Average Kinetic Energy and Root Mean Square Velocity",
            "url": "https://www.youtube.com/watch?v=drZe2cCu-mc",
            "youtubeId": "drZe2cCu-mc"
          },
          {
            "id": "gas-laws-lesson-19",
            "title": "Graham's Law of Effusion",
            "url": "https://www.youtube.com/watch?v=urJI2RHZ42k",
            "youtubeId": "urJI2RHZ42k"
          },
          {
            "id": "gas-laws-lesson-20",
            "title": "Kinetic Molecular Theory of Gases",
            "url": "https://www.youtube.com/watch?v=iAsP-9m2aH0",
            "youtubeId": "iAsP-9m2aH0"
          },
          {
            "id": "gas-laws-lesson-21",
            "title": "Gas Law Review - Extra Practice Problems",
            "url": "https://www.youtube.com/watch?v=2ZtLDXF1V6w",
            "youtubeId": "2ZtLDXF1V6w"
          }
        ]
      },
      {
        "id": "thermochemistry",
        "title": "Thermochemistry",
        "url": "https://www.video-tutor.net/thermochemistry.html",
        "lessons": [
          {
            "id": "thermochemistry-lesson-1",
            "title": "First Law of Thermodynamics",
            "url": "https://www.youtube.com/watch?v=NyOYW07-L5g",
            "youtubeId": "NyOYW07-L5g"
          },
          {
            "id": "thermochemistry-lesson-2",
            "title": "Internal Energy, Heat, and Work - Practice Problems",
            "url": "https://www.youtube.com/watch?v=E7s-hIoyNqY",
            "youtubeId": "E7s-hIoyNqY"
          },
          {
            "id": "thermochemistry-lesson-3",
            "title": "Thermochemical Equations",
            "url": "https://www.youtube.com/watch?v=qDrcHR4tSdE",
            "youtubeId": "qDrcHR4tSdE"
          },
          {
            "id": "thermochemistry-lesson-4",
            "title": "Heat Capacity, Specific Heat Capacity, and Molar Heat Capacity",
            "url": "https://www.youtube.com/watch?v=IoHXMaiwT80",
            "youtubeId": "IoHXMaiwT80"
          },
          {
            "id": "thermochemistry-lesson-5",
            "title": "How to Solve Basic Calorimetry Problems",
            "url": "https://www.youtube.com/watch?v=BGcDUybbTW0",
            "youtubeId": "BGcDUybbTW0"
          },
          {
            "id": "thermochemistry-lesson-6",
            "title": "Calorimetry - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=HlvllF6Ml9c",
            "youtubeId": "HlvllF6Ml9c"
          },
          {
            "id": "thermochemistry-lesson-7",
            "title": "How to Calculate the Final Temperature",
            "url": "https://www.youtube.com/watch?v=lxMwyxvSqgk",
            "youtubeId": "lxMwyxvSqgk"
          },
          {
            "id": "thermochemistry-lesson-8",
            "title": "The Coffee Cup Calorimeter",
            "url": "https://www.youtube.com/watch?v=-XnUypVXE88",
            "youtubeId": "-XnUypVXE88"
          },
          {
            "id": "thermochemistry-lesson-9",
            "title": "The Bomb Calorimeter",
            "url": "https://www.youtube.com/watch?v=F2cMvNDRqQA",
            "youtubeId": "F2cMvNDRqQA"
          },
          {
            "id": "thermochemistry-lesson-10",
            "title": "Calorimetry Review - Extra Practice Problems",
            "url": "https://www.youtube.com/watch?v=ePm_N6RgLfk",
            "youtubeId": "ePm_N6RgLfk"
          },
          {
            "id": "thermochemistry-lesson-11",
            "title": "Hess Law Problems",
            "url": "https://www.youtube.com/watch?v=2ixEf2zpR8E",
            "youtubeId": "2ixEf2zpR8E"
          },
          {
            "id": "thermochemistry-lesson-12",
            "title": "Hess Law - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=Idv2C8HBbug",
            "youtubeId": "Idv2C8HBbug"
          },
          {
            "id": "thermochemistry-lesson-13",
            "title": "Enthalpy of Formation and Heat of Combustion",
            "url": "https://www.youtube.com/watch?v=FP-VYfTYi8Y",
            "youtubeId": "FP-VYfTYi8Y"
          }
        ]
      },
      {
        "id": "atomic-structure",
        "title": "Atomic Structure",
        "url": "https://www.video-tutor.net/atomic-structure.html",
        "lessons": [
          {
            "id": "atomic-structure-lesson-1",
            "title": "Atomic Structure",
            "url": "https://www.youtube.com/watch?v=OH-aSu-rWgk",
            "youtubeId": "OH-aSu-rWgk"
          },
          {
            "id": "atomic-structure-lesson-2",
            "title": "Wavelength, Frequency, and Speed of Light",
            "url": "https://www.youtube.com/watch?v=LgYMxH1LCdo",
            "youtubeId": "LgYMxH1LCdo"
          },
          {
            "id": "atomic-structure-lesson-3",
            "title": "How to Calculate the Energy of a Photon",
            "url": "https://www.youtube.com/watch?v=PYNSopwd1l4",
            "youtubeId": "PYNSopwd1l4"
          },
          {
            "id": "atomic-structure-lesson-4",
            "title": "Atomic Theory - Formulas",
            "url": "https://www.youtube.com/watch?v=QlgkN17V94c",
            "youtubeId": "QlgkN17V94c"
          },
          {
            "id": "atomic-structure-lesson-5",
            "title": "Photoelectric Effect, Work Function, and Threshold Frequency",
            "url": "https://www.youtube.com/watch?v=-LECEvusk8E",
            "youtubeId": "-LECEvusk8E"
          },
          {
            "id": "atomic-structure-lesson-6",
            "title": "De Broglie Wavelength",
            "url": "https://www.youtube.com/watch?v=cYyFPFU6s_A",
            "youtubeId": "cYyFPFU6s_A"
          },
          {
            "id": "atomic-structure-lesson-7",
            "title": "The Bohr Model of the Hydrogen Atom",
            "url": "https://www.youtube.com/watch?v=mXxsT1ut35Q",
            "youtubeId": "mXxsT1ut35Q"
          },
          {
            "id": "atomic-structure-lesson-8",
            "title": "Heisenberg's Uncertainty Principle",
            "url": "https://www.youtube.com/watch?v=BNYz5EKXVeI",
            "youtubeId": "BNYz5EKXVeI"
          },
          {
            "id": "atomic-structure-lesson-9",
            "title": "Intro to Quantum Numbers",
            "url": "https://www.youtube.com/watch?v=eRIN9CPDrpo",
            "youtubeId": "eRIN9CPDrpo"
          },
          {
            "id": "atomic-structure-lesson-10",
            "title": "Atomic Energy Levels, Sublevels, and Orbitals",
            "url": "https://www.youtube.com/watch?v=4sLXUr2HWIs",
            "youtubeId": "4sLXUr2HWIs"
          },
          {
            "id": "atomic-structure-lesson-11",
            "title": "How to Determine the Maximum Number of Electrons",
            "url": "https://www.youtube.com/watch?v=UNE-7AuiMGs",
            "youtubeId": "UNE-7AuiMGs"
          },
          {
            "id": "atomic-structure-lesson-12",
            "title": "Introduction to Electron Configuration",
            "url": "https://www.youtube.com/watch?v=NIwcDnFjj98",
            "youtubeId": "NIwcDnFjj98"
          },
          {
            "id": "atomic-structure-lesson-13",
            "title": "Electron Configuration Exceptions - Cr and Cu",
            "url": "https://www.youtube.com/watch?v=Ur2PuzJ7KWs",
            "youtubeId": "Ur2PuzJ7KWs"
          },
          {
            "id": "atomic-structure-lesson-14",
            "title": "Electron Configuration with Noble Gas Notation",
            "url": "https://www.youtube.com/watch?v=6MAKMnZdfbs",
            "youtubeId": "6MAKMnZdfbs"
          },
          {
            "id": "atomic-structure-lesson-15",
            "title": "Electron Configuration of Ions",
            "url": "https://www.youtube.com/watch?v=nlZa8lN_-Ds",
            "youtubeId": "nlZa8lN_-Ds"
          },
          {
            "id": "atomic-structure-lesson-16",
            "title": "How to Draw Orbital Diagrams",
            "url": "https://www.youtube.com/watch?v=6dRdMy9tgzE",
            "youtubeId": "6dRdMy9tgzE"
          },
          {
            "id": "atomic-structure-lesson-17",
            "title": "How to Determine the Number of Paired and Unpaired Electrons",
            "url": "https://www.youtube.com/watch?v=xwWJf48yfNs",
            "youtubeId": "xwWJf48yfNs"
          },
          {
            "id": "atomic-structure-lesson-18",
            "title": "Aufbau's Principle, Hund's Rule, and Pauli's Exclusion Principle",
            "url": "https://www.youtube.com/watch?v=C6afrc1QS6Y",
            "youtubeId": "C6afrc1QS6Y"
          },
          {
            "id": "atomic-structure-lesson-19",
            "title": "Paramagnetic and Diamagnetic Elements",
            "url": "https://www.youtube.com/watch?v=SO983iq9GaI",
            "youtubeId": "SO983iq9GaI"
          },
          {
            "id": "atomic-structure-lesson-20",
            "title": "Valence Electrons and the Periodic Table",
            "url": "https://www.youtube.com/watch?v=FPk2ziB9iX0",
            "youtubeId": "FPk2ziB9iX0"
          },
          {
            "id": "atomic-structure-lesson-21",
            "title": "How to Calculate the Effective Nuclear Charge of an electron",
            "url": "https://www.youtube.com/watch?v=JDsMR1bHGO4",
            "youtubeId": "JDsMR1bHGO4"
          },
          {
            "id": "atomic-structure-lesson-22",
            "title": "Slater's Rule - Estimating the Effective Nuclear Charge",
            "url": "https://www.youtube.com/watch?v=TaYUOiEe6OA",
            "youtubeId": "TaYUOiEe6OA"
          },
          {
            "id": "atomic-structure-lesson-23",
            "title": "How to Identify the Element Using Electron Configuration",
            "url": "https://www.youtube.com/watch?v=4qwJIJUaIeQ",
            "youtubeId": "4qwJIJUaIeQ"
          },
          {
            "id": "atomic-structure-lesson-24",
            "title": "Electron Configuration Review - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=hEhUNikSC90",
            "youtubeId": "hEhUNikSC90"
          },
          {
            "id": "atomic-structure-lesson-25",
            "title": "Quantum Numbers Review - 22 Test Questions",
            "url": "https://www.youtube.com/watch?v=E-nOH18dF-c",
            "youtubeId": "E-nOH18dF-c"
          },
          {
            "id": "atomic-structure-lesson-26",
            "title": "Ionization Energy",
            "url": "https://www.youtube.com/watch?v=LNVEBURpTcQ",
            "youtubeId": "LNVEBURpTcQ"
          },
          {
            "id": "atomic-structure-lesson-27",
            "title": "Electron Affinity",
            "url": "https://www.youtube.com/watch?v=KhLijA77WQE",
            "youtubeId": "KhLijA77WQE"
          },
          {
            "id": "atomic-structure-lesson-28",
            "title": "Atomic Radius",
            "url": "https://www.youtube.com/watch?v=4Url0pjbcuU",
            "youtubeId": "4Url0pjbcuU"
          },
          {
            "id": "atomic-structure-lesson-29",
            "title": "Review of Periodic Trends",
            "url": "https://www.youtube.com/watch?v=Gy9HR65DpYQ",
            "youtubeId": "Gy9HR65DpYQ"
          }
        ]
      },
      {
        "id": "chemical-bonding",
        "title": "Chemical Bonding",
        "url": "https://www.video-tutor.net/chemical-bonding.html",
        "lessons": [
          {
            "id": "chemical-bonding-lesson-1",
            "title": "Bond Energy and Bond Length",
            "url": "https://www.youtube.com/watch?v=U43-NTF-79E",
            "youtubeId": "U43-NTF-79E"
          },
          {
            "id": "chemical-bonding-lesson-2",
            "title": "Introduction to Electronegativity",
            "url": "https://www.youtube.com/watch?v=c9n2-gkVsaw",
            "youtubeId": "c9n2-gkVsaw"
          },
          {
            "id": "chemical-bonding-lesson-3",
            "title": "Polar and Nonpolar Covalent Bonding",
            "url": "https://www.youtube.com/watch?v=OvjkMqGzgiY",
            "youtubeId": "OvjkMqGzgiY"
          },
          {
            "id": "chemical-bonding-lesson-4",
            "title": "Bond Polarity, Electronegativity, and Dipole Moment",
            "url": "https://www.youtube.com/watch?v=ds5HXmBkO0Y",
            "youtubeId": "ds5HXmBkO0Y"
          },
          {
            "id": "chemical-bonding-lesson-5",
            "title": "Ionic Radius Trends and Isoelectric Ion Size",
            "url": "https://www.youtube.com/watch?v=62pf6YOG6Ag",
            "youtubeId": "62pf6YOG6Ag"
          },
          {
            "id": "chemical-bonding-lesson-6",
            "title": "Lattice Energy",
            "url": "https://www.youtube.com/watch?v=I61-N0GuSx8",
            "youtubeId": "I61-N0GuSx8"
          },
          {
            "id": "chemical-bonding-lesson-7",
            "title": "The Born Haber Cycle",
            "url": "https://www.youtube.com/watch?v=DI-bwx8r3r8",
            "youtubeId": "DI-bwx8r3r8"
          },
          {
            "id": "chemical-bonding-lesson-8",
            "title": "Bond Energy Calculations",
            "url": "https://www.youtube.com/watch?v=0Tm6JMeYX5g",
            "youtubeId": "0Tm6JMeYX5g"
          },
          {
            "id": "chemical-bonding-lesson-9",
            "title": "How to Draw Lewis Structures",
            "url": "https://www.youtube.com/watch?v=NFZtjSeT3XE",
            "youtubeId": "NFZtjSeT3XE"
          },
          {
            "id": "chemical-bonding-lesson-10",
            "title": "VSEPR Theory and Molecular Geometry",
            "url": "https://www.youtube.com/watch?v=DBrq31w8vC4",
            "youtubeId": "DBrq31w8vC4"
          },
          {
            "id": "chemical-bonding-lesson-11",
            "title": "Molecular Geometry - Part 2",
            "url": "https://www.youtube.com/watch?v=_Cw0_cJzkSI",
            "youtubeId": "_Cw0_cJzkSI"
          },
          {
            "id": "chemical-bonding-lesson-12",
            "title": "Lone Pair Formula",
            "url": "https://www.youtube.com/watch?v=Ymf3kZePDnU",
            "youtubeId": "Ymf3kZePDnU"
          },
          {
            "id": "chemical-bonding-lesson-13",
            "title": "Lone Pair Formula (Organic Chemistry)",
            "url": "https://www.youtube.com/watch?v=jlCPY6iXQ1c",
            "youtubeId": "jlCPY6iXQ1c"
          },
          {
            "id": "chemical-bonding-lesson-14",
            "title": "Lewis Structures of Ionic Compounds",
            "url": "https://www.youtube.com/watch?v=xhItoqhHoEE",
            "youtubeId": "xhItoqhHoEE"
          },
          {
            "id": "chemical-bonding-lesson-15",
            "title": "Exceptions to the Octet Rule",
            "url": "https://www.youtube.com/watch?v=96L6_IwyHRM",
            "youtubeId": "96L6_IwyHRM"
          },
          {
            "id": "chemical-bonding-lesson-16",
            "title": "How to Draw Resonance Structures",
            "url": "https://www.youtube.com/watch?v=9B5FGPDwX_E",
            "youtubeId": "9B5FGPDwX_E"
          },
          {
            "id": "chemical-bonding-lesson-17",
            "title": "Polar and Nonpolar Molecules",
            "url": "https://www.youtube.com/watch?v=4ykSzYl_4vI",
            "youtubeId": "4ykSzYl_4vI"
          },
          {
            "id": "chemical-bonding-lesson-18",
            "title": "How to Calculate the Formal Charge of an Atom",
            "url": "https://www.youtube.com/watch?v=R_SIjijCouE",
            "youtubeId": "R_SIjijCouE"
          },
          {
            "id": "chemical-bonding-lesson-19",
            "title": "Lewis Structures - Mega Review!",
            "url": "https://www.youtube.com/watch?v=PeY_sihSh8E",
            "youtubeId": "PeY_sihSh8E"
          }
        ]
      },
      {
        "id": "hybridization",
        "title": "Hybridization and Orbitals",
        "url": "https://www.video-tutor.net/hybridization.html",
        "lessons": [
          {
            "id": "hybridization-lesson-1",
            "title": "Sigma and Pi Bonds",
            "url": "https://www.youtube.com/watch?v=pT8nrBrTOm4",
            "youtubeId": "pT8nrBrTOm4"
          },
          {
            "id": "hybridization-lesson-2",
            "title": "Hybridization of Atomic Orbitals",
            "url": "https://www.youtube.com/watch?v=pdJeQUd2g_4",
            "youtubeId": "pdJeQUd2g_4"
          },
          {
            "id": "hybridization-lesson-4",
            "title": "Molecular Orbital Theory",
            "url": "https://www.youtube.com/watch?v=6tB6E6R_XpQ",
            "youtubeId": "6tB6E6R_XpQ"
          }
        ]
      },
      {
        "id": "liquids-and-solids",
        "title": "Liquids and Solids",
        "url": "https://www.video-tutor.net/liquids-and-solids.html",
        "lessons": [
          {
            "id": "liquids-and-solids-lesson-1",
            "title": "Dipole-Dipole Forces of Attraction",
            "url": "https://www.youtube.com/watch?v=zOvnu0KYyxo",
            "youtubeId": "zOvnu0KYyxo"
          },
          {
            "id": "liquids-and-solids-lesson-2",
            "title": "Hydrogen Bonding in Water",
            "url": "https://www.youtube.com/watch?v=ZDjJOqOKeCI",
            "youtubeId": "ZDjJOqOKeCI"
          },
          {
            "id": "liquids-and-solids-lesson-3",
            "title": "London Dispersion Forces",
            "url": "https://www.youtube.com/watch?v=yIuJfHOVh48",
            "youtubeId": "yIuJfHOVh48"
          },
          {
            "id": "liquids-and-solids-lesson-4",
            "title": "Ion-Dipole Forces",
            "url": "https://www.youtube.com/watch?v=DwNmEc9x1U4",
            "youtubeId": "DwNmEc9x1U4"
          },
          {
            "id": "liquids-and-solids-lesson-5",
            "title": "Bragg's Equation for X-Ray Diffraction",
            "url": "https://www.youtube.com/watch?v=Cjce4QumZNk",
            "youtubeId": "Cjce4QumZNk"
          },
          {
            "id": "liquids-and-solids-lesson-6",
            "title": "Unit Cell and Crystal Lattice Structures",
            "url": "https://www.youtube.com/watch?v=HCWwRh5CXYU",
            "youtubeId": "HCWwRh5CXYU"
          },
          {
            "id": "liquids-and-solids-lesson-8",
            "title": "Ionic Solids, Molecular, Metallic, and Network Covalent Solids",
            "url": "https://www.youtube.com/watch?v=O82d8aiIS5Y",
            "youtubeId": "O82d8aiIS5Y"
          },
          {
            "id": "liquids-and-solids-lesson-9",
            "title": "Metallic Bonding and the Electron Sea Model",
            "url": "https://www.youtube.com/watch?v=ileXLAvDXIU",
            "youtubeId": "ileXLAvDXIU"
          },
          {
            "id": "liquids-and-solids-lesson-10",
            "title": "Metal Alloys, Substitutional Alloys, and Interstitial Alloys",
            "url": "https://www.youtube.com/watch?v=waLo6Yqtsug",
            "youtubeId": "waLo6Yqtsug"
          },
          {
            "id": "liquids-and-solids-lesson-11",
            "title": "Diamond vs Graphite",
            "url": "https://www.youtube.com/watch?v=Anu2evOTnBU",
            "youtubeId": "Anu2evOTnBU"
          },
          {
            "id": "liquids-and-solids-lesson-12",
            "title": "Semiconductors, Insulators, and Conductors",
            "url": "https://www.youtube.com/watch?v=ethnHSgVbHs",
            "youtubeId": "ethnHSgVbHs"
          },
          {
            "id": "liquids-and-solids-lesson-13",
            "title": "Phase Diagrams",
            "url": "https://www.youtube.com/watch?v=QrHlwgmMTq4",
            "youtubeId": "QrHlwgmMTq4"
          },
          {
            "id": "liquids-and-solids-lesson-14",
            "title": "Heating Curve and Cooling Curve of Water",
            "url": "https://www.youtube.com/watch?v=ys2RHRiRc88",
            "youtubeId": "ys2RHRiRc88"
          },
          {
            "id": "liquids-and-solids-lesson-15",
            "title": "Heating Curve Chemistry Problems",
            "url": "https://www.youtube.com/watch?v=AhKRUA4_viY",
            "youtubeId": "AhKRUA4_viY"
          },
          {
            "id": "liquids-and-solids-lesson-16",
            "title": "Final Temperature of Ice and Water Mixture",
            "url": "https://www.youtube.com/watch?v=8Zpr27HvkXc",
            "youtubeId": "8Zpr27HvkXc"
          }
        ]
      },
      {
        "id": "chemistry-1-final-exam-review",
        "title": "Chem 1 Test Questions",
        "url": "https://www.video-tutor.net/chemistry-1-final-exam-review.html",
        "lessons": [
          {
            "id": "chemistry-1-final-exam-review-lesson-1",
            "title": "40 Test Questions",
            "url": "https://www.youtube.com/watch?v=5yw1YH7YA7c",
            "youtubeId": "5yw1YH7YA7c"
          }
        ]
      },
      {
        "id": "solutions",
        "title": "Properties of Solutions",
        "url": "https://www.video-tutor.net/solutions.html",
        "lessons": [
          {
            "id": "solutions-lesson-1",
            "title": "Molarity, Molality, Mass Percent, and Mole Fraction",
            "url": "https://www.youtube.com/watch?v=O_nyEj_hZzg",
            "youtubeId": "O_nyEj_hZzg"
          },
          {
            "id": "solutions-lesson-4",
            "title": "Normality and Equivalent Weight",
            "url": "https://www.youtube.com/watch?v=QCZMyx_557I",
            "youtubeId": "QCZMyx_557I"
          },
          {
            "id": "solutions-lesson-5",
            "title": "Normality and Volume",
            "url": "https://www.youtube.com/watch?v=sNZhOA1BFPE",
            "youtubeId": "sNZhOA1BFPE"
          },
          {
            "id": "solutions-lesson-6",
            "title": "Simplified Normality Formula",
            "url": "https://www.youtube.com/watch?v=3BUG_EVrPVc",
            "youtubeId": "3BUG_EVrPVc"
          },
          {
            "id": "solutions-lesson-7",
            "title": "Solution Concentration Formulas",
            "url": "https://www.youtube.com/watch?v=_73qfPTsR_s",
            "youtubeId": "_73qfPTsR_s"
          },
          {
            "id": "solutions-lesson-8",
            "title": "Parts Per Million and Parts Per Billion",
            "url": "https://www.youtube.com/watch?v=gR_3Z_02mi0",
            "youtubeId": "gR_3Z_02mi0"
          },
          {
            "id": "solutions-lesson-9",
            "title": "How to Convert PPM to PPB",
            "url": "https://www.youtube.com/watch?v=S1r6SubMA1Y",
            "youtubeId": "S1r6SubMA1Y"
          },
          {
            "id": "solutions-lesson-10",
            "title": "How to Convert PPM to Molarity",
            "url": "https://www.youtube.com/watch?v=4W61yKZKgB8",
            "youtubeId": "4W61yKZKgB8"
          },
          {
            "id": "solutions-lesson-11",
            "title": "Enthalpy of Solution and Enthalpy of Hydration",
            "url": "https://www.youtube.com/watch?v=fDglQCYTiqc",
            "youtubeId": "fDglQCYTiqc"
          },
          {
            "id": "solutions-lesson-12",
            "title": "Solubility vs Concentration",
            "url": "https://www.youtube.com/watch?v=cHBlDVg9nR8",
            "youtubeId": "cHBlDVg9nR8"
          },
          {
            "id": "solutions-lesson-13",
            "title": "Solubility Curves",
            "url": "https://www.youtube.com/watch?v=VKmyj1z8T8U",
            "youtubeId": "VKmyj1z8T8U"
          },
          {
            "id": "solutions-lesson-14",
            "title": "Henry's Law and Gas Solubility",
            "url": "https://www.youtube.com/watch?v=74Y6UMsEZ3s",
            "youtubeId": "74Y6UMsEZ3s"
          },
          {
            "id": "solutions-lesson-15",
            "title": "Vapor Pressure, Normal BP, & Clausius Clapeyron Equation",
            "url": "https://www.youtube.com/watch?v=xSHDawWK30s",
            "youtubeId": "xSHDawWK30s"
          },
          {
            "id": "solutions-lesson-18",
            "title": "Raoult's Law and Vapor Pressure of a Solution",
            "url": "https://www.youtube.com/watch?v=0g3339ciUls",
            "youtubeId": "0g3339ciUls"
          },
          {
            "id": "solutions-lesson-21",
            "title": "Colligative Properties",
            "url": "https://www.youtube.com/watch?v=c8dDLe37ONg",
            "youtubeId": "c8dDLe37ONg"
          },
          {
            "id": "solutions-lesson-24",
            "title": "Molar Mass From Osmotic Pressure",
            "url": "https://www.youtube.com/watch?v=tUD_d-3ZTCs",
            "youtubeId": "tUD_d-3ZTCs"
          }
        ]
      },
      {
        "id": "chemical-kinetics",
        "title": "Chemical Kinetics",
        "url": "https://www.video-tutor.net/chemical-kinetics.html",
        "lessons": [
          {
            "id": "chemical-kinetics-lesson-1",
            "title": "Initial Rates Method",
            "url": "https://www.youtube.com/watch?v=oh4L2gcI5ds",
            "youtubeId": "oh4L2gcI5ds"
          },
          {
            "id": "chemical-kinetics-lesson-4",
            "title": "How to Determine the Units of the Rate Constant k",
            "url": "https://www.youtube.com/watch?v=1g-vDSWYins",
            "youtubeId": "1g-vDSWYins"
          },
          {
            "id": "chemical-kinetics-lesson-5",
            "title": "Integrated Rate Laws",
            "url": "https://www.youtube.com/watch?v=7I0Xg92_eA4",
            "youtubeId": "7I0Xg92_eA4"
          },
          {
            "id": "chemical-kinetics-lesson-8",
            "title": "The Nth Order Reaction",
            "url": "https://www.youtube.com/watch?v=2c8KSAeNQ6Y",
            "youtubeId": "2c8KSAeNQ6Y"
          },
          {
            "id": "chemical-kinetics-lesson-9",
            "title": "Factors Affecting the Rate of the Reaction",
            "url": "https://www.youtube.com/watch?v=JpoOfrPKgmM",
            "youtubeId": "JpoOfrPKgmM"
          },
          {
            "id": "chemical-kinetics-lesson-10",
            "title": "Collision Theory - Arrhenius Equation & Activation Energy",
            "url": "https://www.youtube.com/watch?v=jX4dEOFwaLQ",
            "youtubeId": "jX4dEOFwaLQ"
          },
          {
            "id": "chemical-kinetics-lesson-13",
            "title": "Potential Energy Diagrams",
            "url": "https://www.youtube.com/watch?v=HeKOb3efJmE",
            "youtubeId": "HeKOb3efJmE"
          },
          {
            "id": "chemical-kinetics-lesson-14",
            "title": "Elementary Rate Laws",
            "url": "https://www.youtube.com/watch?v=S84Llf1vqiM",
            "youtubeId": "S84Llf1vqiM"
          },
          {
            "id": "chemical-kinetics-lesson-15",
            "title": "Writing Rate Laws of Reaction Mechanisms",
            "url": "https://www.youtube.com/watch?v=B1bWIrOe0SE",
            "youtubeId": "B1bWIrOe0SE"
          },
          {
            "id": "chemical-kinetics-lesson-18",
            "title": "How to Identify the Intermediate and Catalyst in a Mechanism",
            "url": "https://www.youtube.com/watch?v=i_39q6N1sAs",
            "youtubeId": "i_39q6N1sAs"
          },
          {
            "id": "chemical-kinetics-lesson-19",
            "title": "Homogeneous and Heterogeneous Catalysts",
            "url": "https://www.youtube.com/watch?v=Tb0nzaj7bSA",
            "youtubeId": "Tb0nzaj7bSA"
          }
        ]
      },
      {
        "id": "chemical-equilibrium",
        "title": "Chemical Equilibrium",
        "url": "https://www.video-tutor.net/chemical-equilibrium.html",
        "lessons": [
          {
            "id": "chemical-equilibrium-lesson-1",
            "title": "How to Write the Equilibrium Expression",
            "url": "https://www.youtube.com/watch?v=cmVuUFIaLW0",
            "youtubeId": "cmVuUFIaLW0"
          },
          {
            "id": "chemical-equilibrium-lesson-2",
            "title": "How to Calculate Kp from Kc",
            "url": "https://www.youtube.com/watch?v=s0PnM_LlUp4",
            "youtubeId": "s0PnM_LlUp4"
          },
          {
            "id": "chemical-equilibrium-lesson-3",
            "title": "Chemical Equilibrium and Ice Tables",
            "url": "https://www.youtube.com/watch?v=J4WJCYpTYj8",
            "youtubeId": "J4WJCYpTYj8"
          },
          {
            "id": "chemical-equilibrium-lesson-6",
            "title": "Le Chatelier's Principle",
            "url": "https://www.youtube.com/watch?v=bNcTt3l3Q8k",
            "youtubeId": "bNcTt3l3Q8k"
          }
        ]
      },
      {
        "id": "acids-and-bases",
        "title": "Acids and Bases",
        "url": "https://www.video-tutor.net/acids-and-bases.html",
        "lessons": [
          {
            "id": "acids-and-bases-lesson-1",
            "title": "Introduction to Acids and Bases",
            "url": "https://www.youtube.com/watch?v=FM2MpMbV0rw",
            "youtubeId": "FM2MpMbV0rw"
          },
          {
            "id": "acids-and-bases-lesson-4",
            "title": "How to Memorize the Strong Acids and Strong Bases",
            "url": "https://www.youtube.com/watch?v=AaYQ_ZiE7AY",
            "youtubeId": "AaYQ_ZiE7AY"
          },
          {
            "id": "acids-and-bases-lesson-5",
            "title": "Conjugate Acids and Bases",
            "url": "https://www.youtube.com/watch?v=OP6RKqSp1Xw",
            "youtubeId": "OP6RKqSp1Xw"
          },
          {
            "id": "acids-and-bases-lesson-6",
            "title": "Acids and Bases - Formulas and Equations",
            "url": "https://www.youtube.com/watch?v=8VXyvMXbUa8",
            "youtubeId": "8VXyvMXbUa8"
          },
          {
            "id": "acids-and-bases-lesson-7",
            "title": "pH, pOH, [H3O+], [OH-], Ka, Kb, pKa, & pKb - Calculations",
            "url": "https://www.youtube.com/watch?v=OEW4-Sfyvik",
            "youtubeId": "OEW4-Sfyvik"
          },
          {
            "id": "acids-and-bases-lesson-8",
            "title": "How to Estimate the pH Without a Calculator",
            "url": "https://www.youtube.com/watch?v=Mgph6gmIuwg",
            "youtubeId": "Mgph6gmIuwg"
          },
          {
            "id": "acids-and-bases-lesson-9",
            "title": "Autoionization of Water - Kw",
            "url": "https://www.youtube.com/watch?v=ID5K1Yt7Yho",
            "youtubeId": "ID5K1Yt7Yho"
          },
          {
            "id": "acids-and-bases-lesson-10",
            "title": "Acid Base Strength - Which is Stronger?",
            "url": "https://www.youtube.com/watch?v=PdqFSw_SRug",
            "youtubeId": "PdqFSw_SRug"
          },
          {
            "id": "acids-and-bases-lesson-11",
            "title": "Acidic, Basic, and Neutral Salts",
            "url": "https://www.youtube.com/watch?v=-6Pxr7SRgeo",
            "youtubeId": "-6Pxr7SRgeo"
          },
          {
            "id": "acids-and-bases-lesson-12",
            "title": "pH of Weak Acids and Bases - Percent Ionization",
            "url": "https://www.youtube.com/watch?v=kJTCuRSeh6g",
            "youtubeId": "kJTCuRSeh6g"
          },
          {
            "id": "acids-and-bases-lesson-15",
            "title": "Lewis Acids and Bases",
            "url": "https://www.youtube.com/watch?v=rmaLsdFQ2KQ",
            "youtubeId": "rmaLsdFQ2KQ"
          }
        ]
      },
      {
        "id": "aqueous-equilibria",
        "title": "Aqueous Equilibria",
        "url": "https://www.video-tutor.net/aqueous-equilibria.html",
        "lessons": [
          {
            "id": "aqueous-equilibria-lesson-1",
            "title": "Buffer Solutions",
            "url": "https://www.youtube.com/watch?v=kBzPTEB21Po",
            "youtubeId": "kBzPTEB21Po"
          },
          {
            "id": "aqueous-equilibria-lesson-4",
            "title": "How to Calculate the pH of Polyprotic Acids",
            "url": "https://www.youtube.com/watch?v=nXugjkSQtTI",
            "youtubeId": "nXugjkSQtTI"
          },
          {
            "id": "aqueous-equilibria-lesson-5",
            "title": "Acid Base Titration Curves - pH Calculations",
            "url": "https://www.youtube.com/watch?v=LNG9rhmBu8E",
            "youtubeId": "LNG9rhmBu8E"
          },
          {
            "id": "aqueous-equilibria-lesson-8",
            "title": "Acids and Bases Review",
            "url": "https://www.youtube.com/watch?v=hmGPK0cuO7o",
            "youtubeId": "hmGPK0cuO7o"
          },
          {
            "id": "aqueous-equilibria-lesson-11",
            "title": "Ksp, Molar Solubility, Ice Tables, & the Common Ion Effect",
            "url": "https://www.youtube.com/watch?v=kO-9OajoPZs",
            "youtubeId": "kO-9OajoPZs"
          },
          {
            "id": "aqueous-equilibria-lesson-14",
            "title": "Complex Ion Equilibria",
            "url": "https://www.youtube.com/watch?v=nkiMFM19yNE",
            "youtubeId": "nkiMFM19yNE"
          }
        ]
      },
      {
        "id": "free-energy",
        "title": "Free Energy & Spontaneity",
        "url": "https://www.video-tutor.net/free-energy.html",
        "lessons": [
          {
            "id": "free-energy-lesson-1",
            "title": "Spontaneity Formulas",
            "url": "https://www.youtube.com/watch?v=bp389WSTplY",
            "youtubeId": "bp389WSTplY"
          },
          {
            "id": "free-energy-lesson-2",
            "title": "Gibbs Free Energy, Entropy, and Enthalpy Problems",
            "url": "https://www.youtube.com/watch?v=2KuNzB0cZL4",
            "youtubeId": "2KuNzB0cZL4"
          },
          {
            "id": "free-energy-lesson-5",
            "title": "Entropy - 2nd Law of Thermodynamics - Problems",
            "url": "https://www.youtube.com/watch?v=lN66F9V7-_Q",
            "youtubeId": "lN66F9V7-_Q"
          }
        ]
      },
      {
        "id": "electrochemistry",
        "title": "Electrochemistry",
        "url": "https://www.video-tutor.net/electrochemistry.html",
        "lessons": [
          {
            "id": "electrochemistry-lesson-1",
            "title": "Introduction to Galvanic Cells and Voltaic Cells",
            "url": "https://www.youtube.com/watch?v=9blB-uMTIAM",
            "youtubeId": "9blB-uMTIAM"
          },
          {
            "id": "electrochemistry-lesson-2",
            "title": "How to Draw Galvanic Cells and Voltaic Cells",
            "url": "https://www.youtube.com/watch?v=vLCf4_NKjGU",
            "youtubeId": "vLCf4_NKjGU"
          },
          {
            "id": "electrochemistry-lesson-3",
            "title": "Standard Reduction Potentials of Half Reactions",
            "url": "https://www.youtube.com/watch?v=lUXP856WluE",
            "youtubeId": "lUXP856WluE"
          },
          {
            "id": "electrochemistry-lesson-4",
            "title": "Cell Potential Problems",
            "url": "https://www.youtube.com/watch?v=UzkLP8segcs",
            "youtubeId": "UzkLP8segcs"
          },
          {
            "id": "electrochemistry-lesson-5",
            "title": "Cell Notation - Practice Problems",
            "url": "https://www.youtube.com/watch?v=iWqUWwyPkSs",
            "youtubeId": "iWqUWwyPkSs"
          },
          {
            "id": "electrochemistry-lesson-6",
            "title": "Concentration Cells",
            "url": "https://www.youtube.com/watch?v=oOb-knvShdw",
            "youtubeId": "oOb-knvShdw"
          },
          {
            "id": "electrochemistry-lesson-7",
            "title": "Cell Potential and Gibbs Free Energy",
            "url": "https://www.youtube.com/watch?v=LqAfREfwt1Y",
            "youtubeId": "LqAfREfwt1Y"
          },
          {
            "id": "electrochemistry-lesson-8",
            "title": "Equilibrium Constant K and Cell Potential Problems",
            "url": "https://www.youtube.com/watch?v=n4JCEFJKWA0",
            "youtubeId": "n4JCEFJKWA0"
          },
          {
            "id": "electrochemistry-lesson-9",
            "title": "The Nernst Equation",
            "url": "https://www.youtube.com/watch?v=jousNNceCXs",
            "youtubeId": "jousNNceCXs"
          },
          {
            "id": "electrochemistry-lesson-10",
            "title": "Electrolysis of Water",
            "url": "https://www.youtube.com/watch?v=zMLNHm4nUCQ",
            "youtubeId": "zMLNHm4nUCQ"
          },
          {
            "id": "electrochemistry-lesson-11",
            "title": "Electrolysis of Sodium Chloride",
            "url": "https://www.youtube.com/watch?v=1nAe_T5mO2o",
            "youtubeId": "1nAe_T5mO2o"
          },
          {
            "id": "electrochemistry-lesson-12",
            "title": "Introduction to Electroplating",
            "url": "https://www.youtube.com/watch?v=XnliDNb5ZN4",
            "youtubeId": "XnliDNb5ZN4"
          },
          {
            "id": "electrochemistry-lesson-13",
            "title": "Electrolysis and Electroplating Practice Problems",
            "url": "https://www.youtube.com/watch?v=DnvKfiLa_HQ",
            "youtubeId": "DnvKfiLa_HQ"
          },
          {
            "id": "electrochemistry-lesson-14",
            "title": "Electrochemistry Formulas",
            "url": "https://www.youtube.com/watch?v=rn1gLiQ3DAg",
            "youtubeId": "rn1gLiQ3DAg"
          },
          {
            "id": "electrochemistry-lesson-15",
            "title": "Electrochemistry Practice Problems",
            "url": "https://www.youtube.com/watch?v=S9frctwDyL0",
            "youtubeId": "S9frctwDyL0"
          }
        ]
      },
      {
        "id": "radioactivity",
        "title": "Radioactivity",
        "url": "https://www.video-tutor.net/radioactivity.html",
        "lessons": [
          {
            "id": "radioactivity-lesson-1",
            "title": "How to Balance Nuclear Equations in Chemistry",
            "url": "https://www.youtube.com/watch?v=8hnhhBQBQy4",
            "youtubeId": "8hnhhBQBQy4"
          },
          {
            "id": "radioactivity-lesson-2",
            "title": "Alpha, Beta, and Gamma Decay",
            "url": "https://www.youtube.com/watch?v=zF5pn8FVlPI",
            "youtubeId": "zF5pn8FVlPI"
          },
          {
            "id": "radioactivity-lesson-3",
            "title": "Half Life Problems",
            "url": "https://www.youtube.com/watch?v=WTQvfvoOF3g",
            "youtubeId": "WTQvfvoOF3g"
          },
          {
            "id": "radioactivity-lesson-4",
            "title": "Carbon-14 Dating",
            "url": "https://www.youtube.com/watch?v=6aDswTVFGfs",
            "youtubeId": "6aDswTVFGfs"
          },
          {
            "id": "radioactivity-lesson-5",
            "title": "Nuclear Binding Energy",
            "url": "https://www.youtube.com/watch?v=eLwraf_A80U",
            "youtubeId": "eLwraf_A80U"
          },
          {
            "id": "radioactivity-lesson-6",
            "title": "Nuclear Chemistry",
            "url": "https://www.youtube.com/watch?v=F3NSfTXTl7E",
            "youtubeId": "F3NSfTXTl7E"
          }
        ]
      },
      {
        "id": "chemistry-2-final-exam-review",
        "title": "Chem 2 Test Questions",
        "url": "https://www.video-tutor.net/chemistry-2-final-exam-review.html",
        "lessons": [
          {
            "id": "chemistry-2-final-exam-review-lesson-1",
            "title": "40 Test Questions",
            "url": "https://www.youtube.com/watch?v=lSmJN1_uVpI",
            "youtubeId": "lSmJN1_uVpI"
          }
        ]
      },
    ]

  },
  {
    "id": "physics",
    "title": "Physics",
    "url": "https://www.video-tutor.net/physics.html",
    "chapters": [
      {
        "id": "introduction-to-physics",
        "title": "Introduction to Physics",
        "url": "https://www.video-tutor.net/introduction-to-physics.html",
        "lessons": [
          {
            "id": "introduction-to-physics-lesson-1",
            "title": "Basic Introduction to Physics",
            "url": "https://www.youtube.com/watch?v=b1t41Q3xRM8",
            "youtubeId": "b1t41Q3xRM8"
          },
          {
            "id": "introduction-to-physics-lesson-3",
            "title": "How to Pass Physics",
            "url": "https://www.youtube.com/watch?v=162Xf-huKjk",
            "youtubeId": "162Xf-huKjk"
          },
          {
            "id": "introduction-to-physics-lesson-4",
            "title": "Significant Figures - Fast Review!",
            "url": "https://www.youtube.com/watch?v=l2yuDvwYq5g",
            "youtubeId": "l2yuDvwYq5g"
          },
          {
            "id": "introduction-to-physics-lesson-5",
            "title": "Significant Figures - Full Review",
            "url": "https://www.youtube.com/watch?v=9WFxkxFXb20",
            "youtubeId": "9WFxkxFXb20"
          },
          {
            "id": "introduction-to-physics-lesson-6",
            "title": "How to Round Numbers Using Significant Figures",
            "url": "https://www.youtube.com/watch?v=fxdYta_Olv0",
            "youtubeId": "fxdYta_Olv0"
          },
          {
            "id": "introduction-to-physics-lesson-7",
            "title": "Scientific Notation - Fast Review!",
            "url": "https://www.youtube.com/watch?v=ZtB0vJMGve4",
            "youtubeId": "ZtB0vJMGve4"
          },
          {
            "id": "introduction-to-physics-lesson-8",
            "title": "Scientific Notation - Full Review",
            "url": "https://www.youtube.com/watch?v=_BtzXojuM1o",
            "youtubeId": "_BtzXojuM1o"
          },
          {
            "id": "introduction-to-physics-lesson-9",
            "title": "Percent Uncertainty",
            "url": "https://www.youtube.com/watch?v=b881nOem4vg",
            "youtubeId": "b881nOem4vg"
          },
          {
            "id": "introduction-to-physics-lesson-10",
            "title": "SI Base Units and Derived Units",
            "url": "https://www.youtube.com/watch?v=8rZRYPoerPw",
            "youtubeId": "8rZRYPoerPw"
          },
          {
            "id": "introduction-to-physics-lesson-11",
            "title": "Temperature Conversions",
            "url": "https://www.youtube.com/watch?v=G7sRfdAq4M8",
            "youtubeId": "G7sRfdAq4M8"
          },
          {
            "id": "introduction-to-physics-lesson-12",
            "title": "How to Convert Units",
            "url": "https://www.youtube.com/watch?v=eK8gXP3pImU",
            "youtubeId": "eK8gXP3pImU"
          }
        ]
      },
      {
        "id": "kinematics-in-one-dimension",
        "title": "Kinematics - 1 Dimension",
        "url": "https://www.video-tutor.net/kinematics-in-one-dimension.html",
        "lessons": [
          {
            "id": "kinematics-in-one-dimension-lesson-1",
            "title": "Distance, Displacement, Average Speed, and Average Velocity",
            "url": "https://www.youtube.com/watch?v=-Py2zI29THg",
            "youtubeId": "-Py2zI29THg"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-4",
            "title": "Acceleration and Velocity",
            "url": "https://www.youtube.com/watch?v=P0UYC8S4kUI",
            "youtubeId": "P0UYC8S4kUI"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-5",
            "title": "Is the Car Speeding Up or Slowing Down?",
            "url": "https://www.youtube.com/watch?v=3t4eug8ARcs",
            "youtubeId": "3t4eug8ARcs"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-6",
            "title": "How to Convert from Km/hr to m/s",
            "url": "https://www.youtube.com/watch?v=AMGRQR_ANCU",
            "youtubeId": "AMGRQR_ANCU"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-7",
            "title": "How to Convert mph to m/s",
            "url": "https://www.youtube.com/watch?v=jQHj1_q8fSw",
            "youtubeId": "jQHj1_q8fSw"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-8",
            "title": "Kinematics - Formulas",
            "url": "https://www.youtube.com/watch?v=ulXdXTkIkAM",
            "youtubeId": "ulXdXTkIkAM"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-9",
            "title": "Kinematics in one Dimension",
            "url": "https://www.youtube.com/watch?v=dHjWVlfNraM",
            "youtubeId": "dHjWVlfNraM"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-12",
            "title": "What Is a Light-Year?",
            "url": "https://www.youtube.com/watch?v=8JHXkkrJ1ZU",
            "youtubeId": "8JHXkkrJ1ZU"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-13",
            "title": "The 2 Stage Rocket Problem",
            "url": "https://www.youtube.com/watch?v=EAQDQbeCTdk",
            "youtubeId": "EAQDQbeCTdk"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-14",
            "title": "Free Fall Physics Problems",
            "url": "https://www.youtube.com/watch?v=BVgemK1Y2wA",
            "youtubeId": "BVgemK1Y2wA"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-17",
            "title": "The Egg Drop Problem",
            "url": "https://www.youtube.com/watch?v=63rtI9XqUps",
            "youtubeId": "63rtI9XqUps"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-18",
            "title": "How to Calculate the Height of a building",
            "url": "https://www.youtube.com/watch?v=3CPfF1UcYKU",
            "youtubeId": "3CPfF1UcYKU"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-19",
            "title": "How to Calculate Velocity from a Displacement-Time Graph",
            "url": "https://www.youtube.com/watch?v=VzyXhzSg4S0",
            "youtubeId": "VzyXhzSg4S0"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-20",
            "title": "How to Calculate Displacement from a Velocity-Time Graph",
            "url": "https://www.youtube.com/watch?v=9qVCfiuPGZ0",
            "youtubeId": "9qVCfiuPGZ0"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-21",
            "title": "How to Find Acceleration from a Velocity-Time Graph",
            "url": "https://www.youtube.com/watch?v=2usVJlpm73I",
            "youtubeId": "2usVJlpm73I"
          },
          {
            "id": "kinematics-in-one-dimension-lesson-22",
            "title": "Motion Time Graphs - Full Review",
            "url": "https://www.youtube.com/watch?v=nUb7xfkc0Ac",
            "youtubeId": "nUb7xfkc0Ac"
          }
        ]
      },
      {
        "id": "vector-physics",
        "title": "Vectors",
        "url": "https://www.video-tutor.net/vector-physics.html",
        "lessons": [
          {
            "id": "vector-physics-lesson-1",
            "title": "Scalars and Vectors",
            "url": "https://www.youtube.com/watch?v=rcDXQ-5H8mk",
            "youtubeId": "rcDXQ-5H8mk"
          },
          {
            "id": "vector-physics-lesson-2",
            "title": "Basic Introduction to Vectors",
            "url": "https://www.youtube.com/watch?v=EwSHKuSxX_8",
            "youtubeId": "EwSHKuSxX_8"
          },
          {
            "id": "vector-physics-lesson-5",
            "title": "How to Find the Resultant of Two Vectors",
            "url": "https://www.youtube.com/watch?v=RxV06Oj5sMc",
            "youtubeId": "RxV06Oj5sMc"
          },
          {
            "id": "vector-physics-lesson-7",
            "title": "Vector Formulas",
            "url": "https://www.youtube.com/watch?v=SdsrCuCuh1U",
            "youtubeId": "SdsrCuCuh1U"
          },
          {
            "id": "vector-physics-lesson-8",
            "title": "Using the Parallelogram Method to find the Resultant Vector",
            "url": "https://www.youtube.com/watch?v=LrwYAC_4ThY",
            "youtubeId": "LrwYAC_4ThY"
          },
          {
            "id": "vector-physics-lesson-9",
            "title": "Resultant Displacement Vector Practice Problems",
            "url": "https://www.youtube.com/watch?v=8ZGK9kz6cug",
            "youtubeId": "8ZGK9kz6cug"
          },
          {
            "id": "vector-physics-lesson-10",
            "title": "Addition of Vectors - Extra Example Problems",
            "url": "https://www.youtube.com/watch?v=xS-gdFgZel0",
            "youtubeId": "xS-gdFgZel0"
          },
          {
            "id": "vector-physics-lesson-12",
            "title": "Unit Vector Notation",
            "url": "https://www.youtube.com/watch?v=IBNNbzStDLE",
            "youtubeId": "IBNNbzStDLE"
          },
          {
            "id": "vector-physics-lesson-13",
            "title": "Position Vectors",
            "url": "https://www.youtube.com/watch?v=NxAvWfs92U4",
            "youtubeId": "NxAvWfs92U4"
          },
          {
            "id": "vector-physics-lesson-14",
            "title": "Vectors - Precalculus",
            "url": "https://www.youtube.com/watch?v=iXdMpXMuEGI",
            "youtubeId": "iXdMpXMuEGI"
          },
          {
            "id": "vector-physics-lesson-16",
            "title": "Unit Vectors",
            "url": "https://www.youtube.com/watch?v=f5DHYCKyVRo",
            "youtubeId": "f5DHYCKyVRo"
          },
          {
            "id": "vector-physics-lesson-17",
            "title": "The Dot Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=VzX8KJKFhlM",
            "youtubeId": "VzX8KJKFhlM"
          },
          {
            "id": "vector-physics-lesson-18",
            "title": "The Cross Product of Two Vectors",
            "url": "https://www.youtube.com/watch?v=pWbOisq1MJU",
            "youtubeId": "pWbOisq1MJU"
          }
        ]
      },
      {
        "id": "kinematics-in-two-dimensions",
        "title": "Kinematics - 2 Dimensions",
        "url": "https://www.video-tutor.net/kinematics-in-two-dimensions.html",
        "lessons": [
          {
            "id": "kinematics-in-two-dimensions-lesson-1",
            "title": "Projectile Motion Formulas",
            "url": "https://www.youtube.com/watch?v=J2nccNaCx3o",
            "youtubeId": "J2nccNaCx3o"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-2",
            "title": "Projectile Motion Practice Problems",
            "url": "https://www.youtube.com/watch?v=tfItlGfPHyo",
            "youtubeId": "tfItlGfPHyo"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-5",
            "title": "How to Find the Maximum Height and Range",
            "url": "https://www.youtube.com/watch?v=8eEoWQ_KznM",
            "youtubeId": "8eEoWQ_KznM"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-6",
            "title": "How to Find the Height of the Cliff",
            "url": "https://www.youtube.com/watch?v=9al54opqgt8",
            "youtubeId": "9al54opqgt8"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-7",
            "title": "Finding the Final Velocity and Time of Flight",
            "url": "https://www.youtube.com/watch?v=iafy75CsYWE",
            "youtubeId": "iafy75CsYWE"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-8",
            "title": "Finding the Initial Velocity",
            "url": "https://www.youtube.com/watch?v=XTCnlKqjCCM",
            "youtubeId": "XTCnlKqjCCM"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-9",
            "title": "Projectile Motion on an Incline Plane",
            "url": "https://www.youtube.com/watch?v=ecMYbfbTE-w",
            "youtubeId": "ecMYbfbTE-w"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-10",
            "title": "The Angle of Maximum Range",
            "url": "https://www.youtube.com/watch?v=cu_YZFINPN0",
            "youtubeId": "cu_YZFINPN0"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-11",
            "title": "Reference Frames",
            "url": "https://www.youtube.com/watch?v=pdX74x3xiMk",
            "youtubeId": "pdX74x3xiMk"
          },
          {
            "id": "kinematics-in-two-dimensions-lesson-12",
            "title": "Relative Velocity",
            "url": "https://www.youtube.com/watch?v=_39hCnqbNXM",
            "youtubeId": "_39hCnqbNXM"
          }
        ]
      },
      {
        "id": "forces",
        "title": "Forces ​",
        "url": "https://www.video-tutor.net/forces.html",
        "lessons": [
          {
            "id": "forces-lesson-1",
            "title": "Newton's 1st Law of Motion",
            "url": "https://www.youtube.com/watch?v=Fr5EMXZaujc",
            "youtubeId": "Fr5EMXZaujc"
          },
          {
            "id": "forces-lesson-2",
            "title": "Newton's 2nd Law of Motion",
            "url": "https://www.youtube.com/watch?v=Ee6CHn0MRKE",
            "youtubeId": "Ee6CHn0MRKE"
          },
          {
            "id": "forces-lesson-3",
            "title": "Newton's 3rd Law of Motion",
            "url": "https://www.youtube.com/watch?v=TxhESW6YtOg",
            "youtubeId": "TxhESW6YtOg"
          },
          {
            "id": "forces-lesson-4",
            "title": "Force Formulas",
            "url": "https://www.youtube.com/watch?v=wAygj3fIOcc",
            "youtubeId": "wAygj3fIOcc"
          },
          {
            "id": "forces-lesson-5",
            "title": "Mass vs Weight",
            "url": "https://www.youtube.com/watch?v=LB_WoV071vc",
            "youtubeId": "LB_WoV071vc"
          },
          {
            "id": "forces-lesson-6",
            "title": "Free Body Diagrams",
            "url": "https://www.youtube.com/watch?v=52R61aSWHg0",
            "youtubeId": "52R61aSWHg0"
          },
          {
            "id": "forces-lesson-9",
            "title": "What is a Normal Force?",
            "url": "https://www.youtube.com/watch?v=fRQq4_ry9-Q",
            "youtubeId": "fRQq4_ry9-Q"
          },
          {
            "id": "forces-lesson-10",
            "title": "Normal Force Physics Problems",
            "url": "https://www.youtube.com/watch?v=uyJTwljKSJ4",
            "youtubeId": "uyJTwljKSJ4"
          },
          {
            "id": "forces-lesson-11",
            "title": "Elevator Physics Problems",
            "url": "https://www.youtube.com/watch?v=sVVKpRvuNG0",
            "youtubeId": "sVVKpRvuNG0"
          },
          {
            "id": "forces-lesson-12",
            "title": "Net Force Physics Problems",
            "url": "https://www.youtube.com/watch?v=tfAJDST3cjo",
            "youtubeId": "tfAJDST3cjo"
          },
          {
            "id": "forces-lesson-13",
            "title": "Static Friction and Kinetic Friction",
            "url": "https://www.youtube.com/watch?v=RIBeeW1DSZg",
            "youtubeId": "RIBeeW1DSZg"
          },
          {
            "id": "forces-lesson-16",
            "title": "Terminal Velocity",
            "url": "https://www.youtube.com/watch?v=DxnDkDwK3JA",
            "youtubeId": "DxnDkDwK3JA"
          },
          {
            "id": "forces-lesson-17",
            "title": "Contact Forces Between Blocks",
            "url": "https://www.youtube.com/watch?v=Iin29KFE4So",
            "youtubeId": "Iin29KFE4So"
          },
          {
            "id": "forces-lesson-18",
            "title": "Tension Force Physics Problems",
            "url": "https://www.youtube.com/watch?v=F5oqJ5t-pa4",
            "youtubeId": "F5oqJ5t-pa4"
          },
          {
            "id": "forces-lesson-21",
            "title": "How to use Physics to Pull a Car out of the Mud",
            "url": "https://www.youtube.com/watch?v=YINWvIWF7F8",
            "youtubeId": "YINWvIWF7F8"
          },
          {
            "id": "forces-lesson-22",
            "title": "Types of Common Forces in Physics",
            "url": "https://www.youtube.com/watch?v=E626-DiQgRs",
            "youtubeId": "E626-DiQgRs"
          },
          {
            "id": "forces-lesson-23",
            "title": "The Four Fundamental Forces in Nature",
            "url": "https://www.youtube.com/watch?v=k1jaDh97Q_g",
            "youtubeId": "k1jaDh97Q_g"
          },
          {
            "id": "forces-lesson-24",
            "title": "Inclined Planes",
            "url": "https://www.youtube.com/watch?v=ufgY237M5KQ",
            "youtubeId": "ufgY237M5KQ"
          },
          {
            "id": "forces-lesson-27",
            "title": "Simple Machines - Inclined Planes and Ramps",
            "url": "https://www.youtube.com/watch?v=WI8j3UlR-SE",
            "youtubeId": "WI8j3UlR-SE"
          },
          {
            "id": "forces-lesson-28",
            "title": "Simple Machines - The Lever",
            "url": "https://www.youtube.com/watch?v=0HSJx3CHZJ4",
            "youtubeId": "0HSJx3CHZJ4"
          },
          {
            "id": "forces-lesson-29",
            "title": "Simple Machines - The Pulley",
            "url": "https://www.youtube.com/watch?v=GAegAHnfkMs",
            "youtubeId": "GAegAHnfkMs"
          },
          {
            "id": "forces-lesson-30",
            "title": "Mechanical Advantage and Simple Machines (old video)",
            "url": "https://www.youtube.com/watch?v=SPTNKnCqlW4",
            "youtubeId": "SPTNKnCqlW4"
          },
          {
            "id": "forces-lesson-31",
            "title": "Pulley Physics Problems",
            "url": "https://www.youtube.com/watch?v=N6IhkTjWrd4",
            "youtubeId": "N6IhkTjWrd4"
          },
          {
            "id": "forces-lesson-34",
            "title": "Review of Forces (old video)",
            "url": "https://www.youtube.com/watch?v=pL2YfC-22Uc",
            "youtubeId": "pL2YfC-22Uc"
          }
        ]
      },
      {
        "id": "circular-motion",
        "title": "Circular Motion",
        "url": "https://www.video-tutor.net/circular-motion.html",
        "lessons": [
          {
            "id": "circular-motion-lesson-1",
            "title": "Uniform Circular Motion Formulas",
            "url": "https://www.youtube.com/watch?v=v1U626EbtSw",
            "youtubeId": "v1U626EbtSw"
          },
          {
            "id": "circular-motion-lesson-2",
            "title": "Introduction to Centripetal Acceleration",
            "url": "https://www.youtube.com/watch?v=ZbLirQuT9uU",
            "youtubeId": "ZbLirQuT9uU"
          },
          {
            "id": "circular-motion-lesson-3",
            "title": "What is a Centripetal Force?",
            "url": "https://www.youtube.com/watch?v=SQX22VVmRPs",
            "youtubeId": "SQX22VVmRPs"
          },
          {
            "id": "circular-motion-lesson-4",
            "title": "Centripetal Force Physics Problems",
            "url": "https://www.youtube.com/watch?v=ZZx3mYNk2wg",
            "youtubeId": "ZZx3mYNk2wg"
          },
          {
            "id": "circular-motion-lesson-5",
            "title": "Tetherball Physics Problem",
            "url": "https://www.youtube.com/watch?v=G0RikmNonoU",
            "youtubeId": "G0RikmNonoU"
          },
          {
            "id": "circular-motion-lesson-6",
            "title": "Calculating the Tension Force in a Horizontal and Vertical Circle",
            "url": "https://www.youtube.com/watch?v=K9zIjUeI32k",
            "youtubeId": "K9zIjUeI32k"
          },
          {
            "id": "circular-motion-lesson-7",
            "title": "Static Friction and the Centripetal Force",
            "url": "https://www.youtube.com/watch?v=dMgyy95uJUg",
            "youtubeId": "dMgyy95uJUg"
          },
          {
            "id": "circular-motion-lesson-8",
            "title": "Normal Force on a Hill and the Rollercoaster Problem",
            "url": "https://www.youtube.com/watch?v=Ec6btKP4qfg",
            "youtubeId": "Ec6btKP4qfg"
          },
          {
            "id": "circular-motion-lesson-9",
            "title": "Banked Turn Physics Problems",
            "url": "https://www.youtube.com/watch?v=FWXT-IzgbP0",
            "youtubeId": "FWXT-IzgbP0"
          },
          {
            "id": "circular-motion-lesson-11",
            "title": "Non-Uniform Circular Motion Problems",
            "url": "https://www.youtube.com/watch?v=XlvD5_0FVSc",
            "youtubeId": "XlvD5_0FVSc"
          },
          {
            "id": "circular-motion-lesson-12",
            "title": "Gravitational Force Between the Earth, Moon, and Sun",
            "url": "https://www.youtube.com/watch?v=Ep1jIhHdf2A",
            "youtubeId": "Ep1jIhHdf2A"
          },
          {
            "id": "circular-motion-lesson-13",
            "title": "Gravity and the Universal Law of Gravitation",
            "url": "https://www.youtube.com/watch?v=8CykJ3NgBQs",
            "youtubeId": "8CykJ3NgBQs"
          },
          {
            "id": "circular-motion-lesson-14",
            "title": "Gravitational Acceleration Physics Problems",
            "url": "https://www.youtube.com/watch?v=kubaJtXz0c8",
            "youtubeId": "kubaJtXz0c8"
          },
          {
            "id": "circular-motion-lesson-15",
            "title": "Gravitational Field Strength",
            "url": "https://www.youtube.com/watch?v=8AUljAd_AyE",
            "youtubeId": "8AUljAd_AyE"
          },
          {
            "id": "circular-motion-lesson-16",
            "title": "Satellite Speed",
            "url": "https://www.youtube.com/watch?v=QIaAleG0Eb4",
            "youtubeId": "QIaAleG0Eb4"
          },
          {
            "id": "circular-motion-lesson-17",
            "title": "Kepler's Third Law",
            "url": "https://www.youtube.com/watch?v=CCsbSq9wlyI",
            "youtubeId": "CCsbSq9wlyI"
          },
          {
            "id": "circular-motion-lesson-18",
            "title": "Circular Motion Review (old video)",
            "url": "https://www.youtube.com/watch?v=_psIWtPBHzA",
            "youtubeId": "_psIWtPBHzA"
          }
        ]
      },
      {
        "id": "work-and-energy",
        "title": "Work and Energy",
        "url": "https://www.video-tutor.net/work-and-energy.html",
        "lessons": [
          {
            "id": "work-and-energy-lesson-1",
            "title": "Kinetic Energy and Potential Energy",
            "url": "https://www.youtube.com/watch?v=DyaVgHGssos",
            "youtubeId": "DyaVgHGssos"
          },
          {
            "id": "work-and-energy-lesson-2",
            "title": "Different Types of Energy",
            "url": "https://www.youtube.com/watch?v=T1xqwVvtcf8",
            "youtubeId": "T1xqwVvtcf8"
          },
          {
            "id": "work-and-energy-lesson-3",
            "title": "The Siphon - Application of Potential Energy",
            "url": "https://www.youtube.com/watch?v=LcgHlrtacJk",
            "youtubeId": "LcgHlrtacJk"
          },
          {
            "id": "work-and-energy-lesson-4",
            "title": "The Work Equations",
            "url": "https://www.youtube.com/watch?v=3gcCKvKzAW0",
            "youtubeId": "3gcCKvKzAW0"
          },
          {
            "id": "work-and-energy-lesson-5",
            "title": "Work and Kinetic Energy",
            "url": "https://www.youtube.com/watch?v=MR8jQZLcHKM",
            "youtubeId": "MR8jQZLcHKM"
          },
          {
            "id": "work-and-energy-lesson-6",
            "title": "Work, Energy, and Power - Mega Review",
            "url": "https://www.youtube.com/watch?v=_MR1Dp8-F8w",
            "youtubeId": "_MR1Dp8-F8w"
          },
          {
            "id": "work-and-energy-lesson-9",
            "title": "Work Done by Gravity and Gravitational Potential Energy",
            "url": "https://www.youtube.com/watch?v=j8Rf6hXXmUQ",
            "youtubeId": "j8Rf6hXXmUQ"
          },
          {
            "id": "work-and-energy-lesson-10",
            "title": "Work Done by a Force on an Incline - The Dot Product Formula",
            "url": "https://www.youtube.com/watch?v=p9938IIEhXU",
            "youtubeId": "p9938IIEhXU"
          },
          {
            "id": "work-and-energy-lesson-11",
            "title": "Conservative and Nonconservative Forces",
            "url": "https://www.youtube.com/watch?v=N7DAqKuSCsk",
            "youtubeId": "N7DAqKuSCsk"
          },
          {
            "id": "work-and-energy-lesson-12",
            "title": "Mechanical Energy",
            "url": "https://www.youtube.com/watch?v=VrLVUfB_t_U",
            "youtubeId": "VrLVUfB_t_U"
          },
          {
            "id": "work-and-energy-lesson-13",
            "title": "Hooke's Law and Elastic Potential Energy",
            "url": "https://www.youtube.com/watch?v=OmMIOZtM1ks",
            "youtubeId": "OmMIOZtM1ks"
          },
          {
            "id": "work-and-energy-lesson-16",
            "title": "How to Calculate the Work Required to Compress a Spring",
            "url": "https://www.youtube.com/watch?v=H5fiVnbHIf4",
            "youtubeId": "H5fiVnbHIf4"
          },
          {
            "id": "work-and-energy-lesson-17",
            "title": "What is the Difference Between Work and Energy?",
            "url": "https://www.youtube.com/watch?v=x5mJRp8f6Ok",
            "youtubeId": "x5mJRp8f6Ok"
          },
          {
            "id": "work-and-energy-lesson-18",
            "title": "Conservation of Energy Physics Problems",
            "url": "https://www.youtube.com/watch?v=_DwG8fukuj4",
            "youtubeId": "_DwG8fukuj4"
          },
          {
            "id": "work-and-energy-lesson-21",
            "title": "Projectile Motion and the Conservation of Energy",
            "url": "https://www.youtube.com/watch?v=DFNTKiOB7t0",
            "youtubeId": "DFNTKiOB7t0"
          },
          {
            "id": "work-and-energy-lesson-22",
            "title": "What is a Kilowatt Hour?",
            "url": "https://www.youtube.com/watch?v=4BXZuQyAtIA",
            "youtubeId": "4BXZuQyAtIA"
          },
          {
            "id": "work-and-energy-lesson-23",
            "title": "The Dot Product Formula of Power, Force, and Velocity",
            "url": "https://www.youtube.com/watch?v=WSP07nOjDvo",
            "youtubeId": "WSP07nOjDvo"
          }
        ]
      },
      {
        "id": "linear-momentum",
        "title": "Linear Momentum",
        "url": "https://www.video-tutor.net/linear-momentum.html",
        "lessons": [
          {
            "id": "linear-momentum-lesson-1",
            "title": "Introduction to Momentum",
            "url": "https://www.youtube.com/watch?v=NIVNfI0RN2k",
            "youtubeId": "NIVNfI0RN2k"
          },
          {
            "id": "linear-momentum-lesson-2",
            "title": "Introduction to Impulse",
            "url": "https://www.youtube.com/watch?v=hODlmGK7pl8",
            "youtubeId": "hODlmGK7pl8"
          },
          {
            "id": "linear-momentum-lesson-3",
            "title": "Conservation of Momentum Physics Problems",
            "url": "https://www.youtube.com/watch?v=Fp7D5D8Bqjc",
            "youtubeId": "Fp7D5D8Bqjc"
          },
          {
            "id": "linear-momentum-lesson-4",
            "title": "Rocket Propulsion and Mass Flow Rate",
            "url": "https://www.youtube.com/watch?v=kvAf-Xouj8s",
            "youtubeId": "kvAf-Xouj8s"
          },
          {
            "id": "linear-momentum-lesson-5",
            "title": "Defining Net Force Using Momentum",
            "url": "https://www.youtube.com/watch?v=mril0zFVJXQ",
            "youtubeId": "mril0zFVJXQ"
          },
          {
            "id": "linear-momentum-lesson-6",
            "title": "Inelastic Collisions",
            "url": "https://www.youtube.com/watch?v=C1XuwHLacao",
            "youtubeId": "C1XuwHLacao"
          },
          {
            "id": "linear-momentum-lesson-7",
            "title": "Average Force and Contact Time",
            "url": "https://www.youtube.com/watch?v=1WIECGg71WY",
            "youtubeId": "1WIECGg71WY"
          },
          {
            "id": "linear-momentum-lesson-8",
            "title": "Force Time Graphs and Impulse",
            "url": "https://www.youtube.com/watch?v=Bv9ry123zck",
            "youtubeId": "Bv9ry123zck"
          },
          {
            "id": "linear-momentum-lesson-9",
            "title": "Ballistic Pendulum Physics Problems",
            "url": "https://www.youtube.com/watch?v=PUNKqLkELbQ",
            "youtubeId": "PUNKqLkELbQ"
          },
          {
            "id": "linear-momentum-lesson-10",
            "title": "Ballistic Pendulum Shortcut Formulas",
            "url": "https://www.youtube.com/watch?v=5JyanLmejrw",
            "youtubeId": "5JyanLmejrw"
          },
          {
            "id": "linear-momentum-lesson-11",
            "title": "Elastic Collisions in one Dimension",
            "url": "https://www.youtube.com/watch?v=CFbo_nBdBco",
            "youtubeId": "CFbo_nBdBco"
          },
          {
            "id": "linear-momentum-lesson-12",
            "title": "Elastic Collisions - Shortcut Formulas",
            "url": "https://www.youtube.com/watch?v=Gbh9ippmNWc",
            "youtubeId": "Gbh9ippmNWc"
          },
          {
            "id": "linear-momentum-lesson-13",
            "title": "The Coefficient of Restitution",
            "url": "https://www.youtube.com/watch?v=DyfGzKOwtYU",
            "youtubeId": "DyfGzKOwtYU"
          },
          {
            "id": "linear-momentum-lesson-14",
            "title": "Conservation of Momentum in two Dimensions",
            "url": "https://www.youtube.com/watch?v=9YRgHikdcqs",
            "youtubeId": "9YRgHikdcqs"
          },
          {
            "id": "linear-momentum-lesson-15",
            "title": "Impulse and Momentum Formulas",
            "url": "https://www.youtube.com/watch?v=FYKoU0sb9ks",
            "youtubeId": "FYKoU0sb9ks"
          },
          {
            "id": "linear-momentum-lesson-16",
            "title": "The Impulse Formula (Physics with Calculus)",
            "url": "https://www.youtube.com/watch?v=Zs7N7W8VvbI",
            "youtubeId": "Zs7N7W8VvbI"
          },
          {
            "id": "linear-momentum-lesson-17",
            "title": "Impulse and Momentum Review",
            "url": "https://www.youtube.com/watch?v=FfaEbqmvKQA",
            "youtubeId": "FfaEbqmvKQA"
          },
          {
            "id": "linear-momentum-lesson-20",
            "title": "Center of Mass Physics Problems",
            "url": "https://www.youtube.com/watch?v=2uszSnvzBEU",
            "youtubeId": "2uszSnvzBEU"
          }
        ]
      },
      {
        "id": "rotational-motion",
        "title": "Rotational Motion",
        "url": "https://www.video-tutor.net/rotational-motion.html",
        "lessons": [
          {
            "id": "rotational-motion-lesson-1",
            "title": "Introduction to Rotational Motion",
            "url": "https://www.youtube.com/watch?v=WQ9AH2S8B6Y",
            "youtubeId": "WQ9AH2S8B6Y"
          },
          {
            "id": "rotational-motion-lesson-2",
            "title": "Angular Velocity, Linear Speed, Frequency, and Period",
            "url": "https://www.youtube.com/watch?v=d5VXZGinKSk",
            "youtubeId": "d5VXZGinKSk"
          },
          {
            "id": "rotational-motion-lesson-3",
            "title": "Angular Acceleration",
            "url": "https://www.youtube.com/watch?v=a99sO7pogXA",
            "youtubeId": "a99sO7pogXA"
          },
          {
            "id": "rotational-motion-lesson-4",
            "title": "Rotational Kinematics",
            "url": "https://www.youtube.com/watch?v=0El-DqrCTZM",
            "youtubeId": "0El-DqrCTZM"
          },
          {
            "id": "rotational-motion-lesson-5",
            "title": "Torque, Lever Arm, and Moment of Force",
            "url": "https://www.youtube.com/watch?v=jg4e8W44_E4",
            "youtubeId": "jg4e8W44_E4"
          },
          {
            "id": "rotational-motion-lesson-6",
            "title": "Torque vs Horsepower",
            "url": "https://www.youtube.com/watch?v=S23AOeGP_Os",
            "youtubeId": "S23AOeGP_Os"
          },
          {
            "id": "rotational-motion-lesson-7",
            "title": "Inertia, Torque, and Angular Acceleration",
            "url": "https://www.youtube.com/watch?v=Ic_wFYu8xVs",
            "youtubeId": "Ic_wFYu8xVs"
          },
          {
            "id": "rotational-motion-lesson-8",
            "title": "Parallel Axis Theorem and Moment of Inertia",
            "url": "https://www.youtube.com/watch?v=JrkimXqnCLw",
            "youtubeId": "JrkimXqnCLw"
          },
          {
            "id": "rotational-motion-lesson-9",
            "title": "Rotational Dynamics",
            "url": "https://www.youtube.com/watch?v=dbvr-L5rxdg",
            "youtubeId": "dbvr-L5rxdg"
          },
          {
            "id": "rotational-motion-lesson-11",
            "title": "Rotational Kinetic Energy",
            "url": "https://www.youtube.com/watch?v=REIP2mf6sIQ",
            "youtubeId": "REIP2mf6sIQ"
          },
          {
            "id": "rotational-motion-lesson-12",
            "title": "Rotational Power, Work, Energy, and Torque",
            "url": "https://www.youtube.com/watch?v=KbYejyiRsFw",
            "youtubeId": "KbYejyiRsFw"
          },
          {
            "id": "rotational-motion-lesson-13",
            "title": "Work Done by a Constant Torque",
            "url": "https://www.youtube.com/watch?v=-DPthKuQGyQ",
            "youtubeId": "-DPthKuQGyQ"
          },
          {
            "id": "rotational-motion-lesson-14",
            "title": "Angular Momentum",
            "url": "https://www.youtube.com/watch?v=WzjIMuf-yuo",
            "youtubeId": "WzjIMuf-yuo"
          },
          {
            "id": "rotational-motion-lesson-15",
            "title": "What is Angular Momentum?",
            "url": "https://www.youtube.com/watch?v=4GgJ6EgAmFg",
            "youtubeId": "4GgJ6EgAmFg"
          },
          {
            "id": "rotational-motion-lesson-16",
            "title": "Angular Momentum Physics Problems",
            "url": "https://www.youtube.com/watch?v=QghXDDJtJeQ",
            "youtubeId": "QghXDDJtJeQ"
          },
          {
            "id": "rotational-motion-lesson-17",
            "title": "Angular Impulse",
            "url": "https://www.youtube.com/watch?v=RQL_0MMbxkc",
            "youtubeId": "RQL_0MMbxkc"
          },
          {
            "id": "rotational-motion-lesson-18",
            "title": "Rotational Motion Review - Old Video",
            "url": "https://www.youtube.com/watch?v=SPSvosj6Snc",
            "youtubeId": "SPSvosj6Snc"
          }
        ]
      },
      {
        "id": "physics-1-final-exam-review-videos",
        "title": "100 Test Questions",
        "url": "https://www.video-tutor.net/physics-1-final-exam-review-videos.html",
        "lessons": [
          {
            "id": "physics-1-final-exam-review-videos-lesson-1",
            "title": "Formulas and Equations",
            "url": "https://www.youtube.com/watch?v=E8C06X-v0_A",
            "youtubeId": "E8C06X-v0_A"
          },
          {
            "id": "physics-1-final-exam-review-videos-lesson-2",
            "title": "40 Test Questions",
            "url": "https://www.youtube.com/watch?v=CwkhvFlNFp0",
            "youtubeId": "CwkhvFlNFp0"
          }
        ]
      },
      {
        "id": "static-equilibrium",
        "title": "Static Equilibrium",
        "url": "https://www.video-tutor.net/static-equilibrium.html",
        "lessons": [
          {
            "id": "static-equilibrium-lesson-1",
            "title": "Static Equilibrium",
            "url": "https://www.youtube.com/watch?v=qGvFAl5CK_c",
            "youtubeId": "qGvFAl5CK_c"
          },
          {
            "id": "static-equilibrium-lesson-2",
            "title": "Young's Modulus - Elasticity and Hooke's Law",
            "url": "https://www.youtube.com/watch?v=HALbtyDUjp0",
            "youtubeId": "HALbtyDUjp0"
          },
          {
            "id": "static-equilibrium-lesson-3",
            "title": "Tensile Strain and Compressive Stress",
            "url": "https://www.youtube.com/watch?v=c6ndD5kTkP4",
            "youtubeId": "c6ndD5kTkP4"
          },
          {
            "id": "static-equilibrium-lesson-4",
            "title": "Elastic Modulus and Shear Modulus",
            "url": "https://www.youtube.com/watch?v=qQZRTBRJbl4",
            "youtubeId": "qQZRTBRJbl4"
          },
          {
            "id": "static-equilibrium-lesson-5",
            "title": "The Bulk Modulus",
            "url": "https://www.youtube.com/watch?v=ugxgSIGIHrg",
            "youtubeId": "ugxgSIGIHrg"
          }
        ]
      },
      {
        "id": "pressure-and-fluids",
        "title": "Pressure and Fluids",
        "url": "https://www.video-tutor.net/pressure-and-fluids.html",
        "lessons": [
          {
            "id": "pressure-and-fluids-lesson-1",
            "title": "Specific Gravity and Density of Mixtures",
            "url": "https://www.youtube.com/watch?v=ZcJGFZt-NO4",
            "youtubeId": "ZcJGFZt-NO4"
          },
          {
            "id": "pressure-and-fluids-lesson-2",
            "title": "Will it Sink or Float?",
            "url": "https://www.youtube.com/watch?v=4fwZM6cqyzk",
            "youtubeId": "4fwZM6cqyzk"
          },
          {
            "id": "pressure-and-fluids-lesson-3",
            "title": "Introduction to Pressure and Fluids",
            "url": "https://www.youtube.com/watch?v=kkq8ruV8_Jw",
            "youtubeId": "kkq8ruV8_Jw"
          },
          {
            "id": "pressure-and-fluids-lesson-4",
            "title": "Atmospheric Pressure Problems",
            "url": "https://www.youtube.com/watch?v=tYd_CYpNpeY",
            "youtubeId": "tYd_CYpNpeY"
          },
          {
            "id": "pressure-and-fluids-lesson-5",
            "title": "The Gallon Crusher",
            "url": "https://www.youtube.com/watch?v=abXVQZlFPJg",
            "youtubeId": "abXVQZlFPJg"
          },
          {
            "id": "pressure-and-fluids-lesson-6",
            "title": "Absolute Pressure vs Gauge Pressure",
            "url": "https://www.youtube.com/watch?v=XCiBaFp8L_M",
            "youtubeId": "XCiBaFp8L_M"
          },
          {
            "id": "pressure-and-fluids-lesson-7",
            "title": "Water Pressure and Gauge Pressure",
            "url": "https://www.youtube.com/watch?v=12K_aP1KPFk",
            "youtubeId": "12K_aP1KPFk"
          },
          {
            "id": "pressure-and-fluids-lesson-8",
            "title": "The Hydraulic Lift System",
            "url": "https://www.youtube.com/watch?v=MZ6GCH2nLy0",
            "youtubeId": "MZ6GCH2nLy0"
          },
          {
            "id": "pressure-and-fluids-lesson-9",
            "title": "The Mercury Barometer",
            "url": "https://www.youtube.com/watch?v=xQXFWrNmTHc",
            "youtubeId": "xQXFWrNmTHc"
          },
          {
            "id": "pressure-and-fluids-lesson-10",
            "title": "The Open Tube Manometer",
            "url": "https://www.youtube.com/watch?v=qHPaHMvsXLk",
            "youtubeId": "qHPaHMvsXLk"
          },
          {
            "id": "pressure-and-fluids-lesson-11",
            "title": "The U Tube Manometers",
            "url": "https://www.youtube.com/watch?v=0CKRGsLZh6Y",
            "youtubeId": "0CKRGsLZh6Y"
          },
          {
            "id": "pressure-and-fluids-lesson-12",
            "title": "Archimedes Principle and Buoyant Force",
            "url": "https://www.youtube.com/watch?v=Qgl_l0H7Qgc",
            "youtubeId": "Qgl_l0H7Qgc"
          },
          {
            "id": "pressure-and-fluids-lesson-13",
            "title": "The Buoyant Force and Load Mass of a Helium Balloon",
            "url": "https://www.youtube.com/watch?v=xh6V4sEeUYs",
            "youtubeId": "xh6V4sEeUYs"
          },
          {
            "id": "pressure-and-fluids-lesson-14",
            "title": "Illustration of Buoyancy",
            "url": "https://www.youtube.com/watch?v=i1pGInNc-hg",
            "youtubeId": "i1pGInNc-hg"
          },
          {
            "id": "pressure-and-fluids-lesson-15",
            "title": "Apparent Weight Physics Problems",
            "url": "https://www.youtube.com/watch?v=yQIl0HyqlYg",
            "youtubeId": "yQIl0HyqlYg"
          },
          {
            "id": "pressure-and-fluids-lesson-16",
            "title": "Fractional Volume of Partially Submerged Objects",
            "url": "https://www.youtube.com/watch?v=sMkHKMsBEl8",
            "youtubeId": "sMkHKMsBEl8"
          },
          {
            "id": "pressure-and-fluids-lesson-17",
            "title": "The Hydrometer",
            "url": "https://www.youtube.com/watch?v=xx8dOAwRFs4",
            "youtubeId": "xx8dOAwRFs4"
          },
          {
            "id": "pressure-and-fluids-lesson-18",
            "title": "Volume Flow Rate and Mass Flow Rate",
            "url": "https://www.youtube.com/watch?v=lY0CaQaxLHE",
            "youtubeId": "lY0CaQaxLHE"
          },
          {
            "id": "pressure-and-fluids-lesson-19",
            "title": "The Continuity Equation",
            "url": "https://www.youtube.com/watch?v=DxX6XLEdcAw",
            "youtubeId": "DxX6XLEdcAw"
          },
          {
            "id": "pressure-and-fluids-lesson-20",
            "title": "Bernoulli's Equation",
            "url": "https://www.youtube.com/watch?v=xTAfyc06ZxQ",
            "youtubeId": "xTAfyc06ZxQ"
          },
          {
            "id": "pressure-and-fluids-lesson-21",
            "title": "Torricelli's Theorem",
            "url": "https://www.youtube.com/watch?v=046-DygKrhc",
            "youtubeId": "046-DygKrhc"
          },
          {
            "id": "pressure-and-fluids-lesson-22",
            "title": "The Venturi Meter",
            "url": "https://www.youtube.com/watch?v=lyk_HloXz-E",
            "youtubeId": "lyk_HloXz-E"
          },
          {
            "id": "pressure-and-fluids-lesson-23",
            "title": "Dynamic Lift Force",
            "url": "https://www.youtube.com/watch?v=HsgZM2TXXy4",
            "youtubeId": "HsgZM2TXXy4"
          },
          {
            "id": "pressure-and-fluids-lesson-24",
            "title": "Viscosity of Fluids and the Velocity Gradient",
            "url": "https://www.youtube.com/watch?v=PoG14wRRQmM",
            "youtubeId": "PoG14wRRQmM"
          },
          {
            "id": "pressure-and-fluids-lesson-25",
            "title": "Poiseuille's Law, Coefficient of Viscosity and Fluid Power",
            "url": "https://www.youtube.com/watch?v=UeQu19VChjE",
            "youtubeId": "UeQu19VChjE"
          },
          {
            "id": "pressure-and-fluids-lesson-26",
            "title": "Surface Tension of Water and Capillary Action",
            "url": "https://www.youtube.com/watch?v=WBk7mGb7TKw&t=483s",
            "youtubeId": "WBk7mGb7TKw"
          },
          {
            "id": "pressure-and-fluids-lesson-27",
            "title": "Pressure and Fluids Review (old video)",
            "url": "https://www.youtube.com/watch?v=nUKUzpRgdbY",
            "youtubeId": "nUKUzpRgdbY"
          }
        ]
      },
      {
        "id": "waves-and-vibrations",
        "title": "Waves and Vibrations",
        "url": "https://www.video-tutor.net/waves-and-vibrations.html",
        "lessons": [
          {
            "id": "waves-and-vibrations-lesson-1",
            "title": "Introduction to Simple Harmonic Motion",
            "url": "https://www.youtube.com/watch?v=_Gnke2x3vT8",
            "youtubeId": "_Gnke2x3vT8"
          },
          {
            "id": "waves-and-vibrations-lesson-2",
            "title": "Energy in a Simple Harmonic Oscillator",
            "url": "https://www.youtube.com/watch?v=QvnmfBqdVIQ",
            "youtubeId": "QvnmfBqdVIQ"
          },
          {
            "id": "waves-and-vibrations-lesson-3",
            "title": "The Simple Pendulum",
            "url": "https://www.youtube.com/watch?v=1Q15fgz-lUk",
            "youtubeId": "1Q15fgz-lUk"
          },
          {
            "id": "waves-and-vibrations-lesson-5",
            "title": "The Physical Pendulum",
            "url": "https://www.youtube.com/watch?v=scIVIhChL1I",
            "youtubeId": "scIVIhChL1I"
          },
          {
            "id": "waves-and-vibrations-lesson-6",
            "title": "Simple Harmonic Motion - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=iubb3eFBQ9U",
            "youtubeId": "iubb3eFBQ9U"
          },
          {
            "id": "waves-and-vibrations-lesson-7",
            "title": "Mechanical Waves",
            "url": "https://www.youtube.com/watch?v=qm1hDJrIYwE",
            "youtubeId": "qm1hDJrIYwE"
          },
          {
            "id": "waves-and-vibrations-lesson-8",
            "title": "Wave Speed on a String, Tension Force, Amplitude, & Intensity",
            "url": "https://www.youtube.com/watch?v=vEzftaDL7fM",
            "youtubeId": "vEzftaDL7fM"
          },
          {
            "id": "waves-and-vibrations-lesson-9",
            "title": "Standing Waves, Harmonics, and Fundamental Frequency",
            "url": "https://www.youtube.com/watch?v=-8nn8hb0H8o",
            "youtubeId": "-8nn8hb0H8o"
          }
        ]
      },
      {
        "id": "sound-waves",
        "title": "Sound Waves",
        "url": "https://www.video-tutor.net/sound-waves.html",
        "lessons": [
          {
            "id": "sound-waves-lesson-1",
            "title": "Speed of Sound in Solids, Liquids, and Gases",
            "url": "https://www.youtube.com/watch?v=kr4nOru3JZU",
            "youtubeId": "kr4nOru3JZU"
          },
          {
            "id": "sound-waves-lesson-2",
            "title": "Sound Intensity and Inverse Square Law",
            "url": "https://www.youtube.com/watch?v=6ZQYALZqZNQ",
            "youtubeId": "6ZQYALZqZNQ"
          },
          {
            "id": "sound-waves-lesson-3",
            "title": "Sound Intensity Level in Decibels",
            "url": "https://www.youtube.com/watch?v=twppI9Eizp8",
            "youtubeId": "twppI9Eizp8"
          },
          {
            "id": "sound-waves-lesson-4",
            "title": "Beat Frequency Physics Problems",
            "url": "https://www.youtube.com/watch?v=M-OMq4QsPfY",
            "youtubeId": "M-OMq4QsPfY"
          },
          {
            "id": "sound-waves-lesson-5",
            "title": "Standing Waves in Organ Pipes",
            "url": "https://www.youtube.com/watch?v=7eyYNNUojEc",
            "youtubeId": "7eyYNNUojEc"
          },
          {
            "id": "sound-waves-lesson-6",
            "title": "Doppler Effect Physics Problems",
            "url": "https://www.youtube.com/watch?v=WiTQxNaKAYA",
            "youtubeId": "WiTQxNaKAYA"
          },
          {
            "id": "sound-waves-lesson-9",
            "title": "Sound Waves Review (old video)",
            "url": "https://www.youtube.com/watch?v=yVBtcAEHLfU",
            "youtubeId": "yVBtcAEHLfU"
          }
        ]
      },
      {
        "id": "physics-1b-final-exam-review",
        "title": "27 Test Questions",
        "url": "https://www.video-tutor.net/physics-1b-final-exam-review.html",
        "lessons": [
          {
            "id": "physics-1b-final-exam-review-lesson-1",
            "title": "11 Test Questions",
            "url": "https://www.youtube.com/watch?v=mpmni1vZiAM",
            "youtubeId": "mpmni1vZiAM"
          }
        ]
      },
      {
        "id": "kinetic-theory",
        "title": "Temp and Kinetic Theory",
        "url": "https://www.video-tutor.net/kinetic-theory.html",
        "lessons": [
          {
            "id": "kinetic-theory-lesson-1",
            "title": "Temperature Conversions",
            "url": "https://www.youtube.com/watch?v=6qiYcyhI158",
            "youtubeId": "6qiYcyhI158"
          },
          {
            "id": "kinetic-theory-lesson-2",
            "title": "Linear Expansion of Solids",
            "url": "https://www.youtube.com/watch?v=dWzX3hBYxdk",
            "youtubeId": "dWzX3hBYxdk"
          },
          {
            "id": "kinetic-theory-lesson-3",
            "title": "Thermal Stress and Strain",
            "url": "https://www.youtube.com/watch?v=FwOsoeOvZzo",
            "youtubeId": "FwOsoeOvZzo"
          },
          {
            "id": "kinetic-theory-lesson-4",
            "title": "Boyle's Law",
            "url": "https://www.youtube.com/watch?v=v8r_AU_TlPg",
            "youtubeId": "v8r_AU_TlPg"
          },
          {
            "id": "kinetic-theory-lesson-5",
            "title": "Charles Law",
            "url": "https://www.youtube.com/watch?v=uZ2d79NFx2w",
            "youtubeId": "uZ2d79NFx2w"
          },
          {
            "id": "kinetic-theory-lesson-6",
            "title": "Gay Lussac's Law",
            "url": "https://www.youtube.com/watch?v=RszgzH_2A9k",
            "youtubeId": "RszgzH_2A9k"
          },
          {
            "id": "kinetic-theory-lesson-7",
            "title": "Avogadro's Law",
            "url": "https://www.youtube.com/watch?v=Czo2rIai5u0",
            "youtubeId": "Czo2rIai5u0"
          },
          {
            "id": "kinetic-theory-lesson-8",
            "title": "Ideal Gas Law Physics Problems",
            "url": "https://www.youtube.com/watch?v=LZUs6nawHAk",
            "youtubeId": "LZUs6nawHAk"
          },
          {
            "id": "kinetic-theory-lesson-9",
            "title": "Average Translational Kinetic Energy with Boltzmann's Constant",
            "url": "https://www.youtube.com/watch?v=bg5d5BFANVU",
            "youtubeId": "bg5d5BFANVU"
          },
          {
            "id": "kinetic-theory-lesson-10",
            "title": "Molar Heat Capacities of Gases",
            "url": "https://www.youtube.com/watch?v=SwMODT8m4Ls",
            "youtubeId": "SwMODT8m4Ls"
          },
          {
            "id": "kinetic-theory-lesson-11",
            "title": "Molecular Speed of Gases",
            "url": "https://www.youtube.com/watch?v=0m25oTKMv1Y",
            "youtubeId": "0m25oTKMv1Y"
          },
          {
            "id": "kinetic-theory-lesson-12",
            "title": "Mean Free Path and Mean Free Time",
            "url": "https://www.youtube.com/watch?v=ypK7h3NKe1E",
            "youtubeId": "ypK7h3NKe1E"
          },
          {
            "id": "kinetic-theory-lesson-13",
            "title": "Root Mean Square Speed vs Average Speed",
            "url": "https://www.youtube.com/watch?v=hBlwfG6IBLg",
            "youtubeId": "hBlwfG6IBLg"
          },
          {
            "id": "kinetic-theory-lesson-14",
            "title": "Phase Diagrams of Water and CO2",
            "url": "https://www.youtube.com/watch?v=QrHlwgmMTq4",
            "youtubeId": "QrHlwgmMTq4"
          },
          {
            "id": "kinetic-theory-lesson-15",
            "title": "Relative Humidity and Vapor Pressure",
            "url": "https://www.youtube.com/watch?v=BqFVtlQa-2w",
            "youtubeId": "BqFVtlQa-2w"
          },
          {
            "id": "kinetic-theory-lesson-16",
            "title": "Fick's Law of Diffusion",
            "url": "https://www.youtube.com/watch?v=JgAKv1Zlgcw",
            "youtubeId": "JgAKv1Zlgcw"
          }
        ]
      },
      {
        "id": "heat",
        "title": "Heat",
        "url": "https://www.video-tutor.net/heat.html",
        "lessons": [
          {
            "id": "heat-lesson-1",
            "title": "Units of Heat Energy - Joules and Food Calories",
            "url": "https://www.youtube.com/watch?v=Pwr_yzR4kA4",
            "youtubeId": "Pwr_yzR4kA4"
          },
          {
            "id": "heat-lesson-2",
            "title": "How to Solve Basic Calorimetry Problems",
            "url": "https://www.youtube.com/watch?v=BGcDUybbTW0",
            "youtubeId": "BGcDUybbTW0"
          },
          {
            "id": "heat-lesson-3",
            "title": "How to Calculate the Final Temperature",
            "url": "https://www.youtube.com/watch?v=lxMwyxvSqgk",
            "youtubeId": "lxMwyxvSqgk"
          },
          {
            "id": "heat-lesson-4",
            "title": "Specific Heat Capacity - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=ePm_N6RgLfk",
            "youtubeId": "ePm_N6RgLfk"
          },
          {
            "id": "heat-lesson-5",
            "title": "Molar Heat Capacity Problems",
            "url": "https://www.youtube.com/watch?v=Vr3FJLxpdrU",
            "youtubeId": "Vr3FJLxpdrU"
          },
          {
            "id": "heat-lesson-6",
            "title": "Latent Heat of Fusion and Vaporization",
            "url": "https://www.youtube.com/watch?v=dxtz2POUTJE",
            "youtubeId": "dxtz2POUTJE"
          },
          {
            "id": "heat-lesson-7",
            "title": "Heat Transfer - Conduction, Convection, and Radiation",
            "url": "https://www.youtube.com/watch?v=bRZwzy0xvhM",
            "youtubeId": "bRZwzy0xvhM"
          },
          {
            "id": "heat-lesson-8",
            "title": "Heat Current and Thermal Resistance",
            "url": "https://www.youtube.com/watch?v=62nNz3mFr6U",
            "youtubeId": "62nNz3mFr6U"
          },
          {
            "id": "heat-lesson-9",
            "title": "Stefan-Boltzmann Equation and Thermal Conductivity",
            "url": "https://www.youtube.com/watch?v=LR5bYxC4syI",
            "youtubeId": "LR5bYxC4syI"
          }
        ]
      },
      {
        "id": "thermodynamics",
        "title": "Thermodynamics",
        "url": "https://www.video-tutor.net/thermodynamics.html",
        "lessons": [
          {
            "id": "thermodynamics-lesson-1",
            "title": "Open, Closed, and Isolated Systems",
            "url": "https://www.youtube.com/watch?v=TFP6SvWPOQc",
            "youtubeId": "TFP6SvWPOQc"
          },
          {
            "id": "thermodynamics-lesson-2",
            "title": "Internal Energy, Heat, and Work - 1st Law of Thermodynamics",
            "url": "https://www.youtube.com/watch?v=7Siv2NNCFag",
            "youtubeId": "7Siv2NNCFag"
          },
          {
            "id": "thermodynamics-lesson-3",
            "title": "The Isobaric Process",
            "url": "https://www.youtube.com/watch?v=BG-cUpnNmPM",
            "youtubeId": "BG-cUpnNmPM"
          },
          {
            "id": "thermodynamics-lesson-4",
            "title": "The Isochoric Process",
            "url": "https://www.youtube.com/watch?v=SxfgHdfKjQA",
            "youtubeId": "SxfgHdfKjQA"
          },
          {
            "id": "thermodynamics-lesson-5",
            "title": "The Isothermal Process",
            "url": "https://www.youtube.com/watch?v=m9h6qyWLscs",
            "youtubeId": "m9h6qyWLscs"
          },
          {
            "id": "thermodynamics-lesson-6",
            "title": "Internal Energy of an Ideal Gas",
            "url": "https://www.youtube.com/watch?v=k3rJs_ioTHc",
            "youtubeId": "k3rJs_ioTHc"
          },
          {
            "id": "thermodynamics-lesson-7",
            "title": "The Adiabatic Process",
            "url": "https://www.youtube.com/watch?v=gaZmZjBtgAM",
            "youtubeId": "gaZmZjBtgAM"
          },
          {
            "id": "thermodynamics-lesson-8",
            "title": "PV Diagrams",
            "url": "https://www.youtube.com/watch?v=b-4U_s4e50o",
            "youtubeId": "b-4U_s4e50o"
          },
          {
            "id": "thermodynamics-lesson-9",
            "title": "Thermodynamics - Review (old video)",
            "url": "https://www.youtube.com/watch?v=TnDCxw0y6YM",
            "youtubeId": "TnDCxw0y6YM"
          },
          {
            "id": "thermodynamics-lesson-10",
            "title": "2nd Law of Thermodynamics",
            "url": "https://www.youtube.com/watch?v=DWiCaDPM7Hk",
            "youtubeId": "DWiCaDPM7Hk"
          },
          {
            "id": "thermodynamics-lesson-11",
            "title": "Heat Engines and Thermal Efficiency",
            "url": "https://www.youtube.com/watch?v=O7TSo_up1Dw",
            "youtubeId": "O7TSo_up1Dw"
          },
          {
            "id": "thermodynamics-lesson-12",
            "title": "How to Convert Heat into Electricity",
            "url": "https://www.youtube.com/watch?v=LX2cU27kUUc",
            "youtubeId": "LX2cU27kUUc"
          },
          {
            "id": "thermodynamics-lesson-13",
            "title": "The Carnot Cycle",
            "url": "https://www.youtube.com/watch?v=Qi3m9sD5w-A",
            "youtubeId": "Qi3m9sD5w-A"
          },
          {
            "id": "thermodynamics-lesson-14",
            "title": "Light Energy to Kinetic Energy",
            "url": "https://www.youtube.com/watch?v=oqSThC47C4k",
            "youtubeId": "oqSThC47C4k"
          },
          {
            "id": "thermodynamics-lesson-15",
            "title": "The Otto Cycle of Internal Combustion Engines",
            "url": "https://www.youtube.com/watch?v=vAeMmSRdQYY",
            "youtubeId": "vAeMmSRdQYY"
          },
          {
            "id": "thermodynamics-lesson-16",
            "title": "Refrigerators and Heat Pumps",
            "url": "https://www.youtube.com/watch?v=sKfgz6JLQRI",
            "youtubeId": "sKfgz6JLQRI"
          },
          {
            "id": "thermodynamics-lesson-17",
            "title": "Entropy Change Calculations",
            "url": "https://www.youtube.com/watch?v=Bdn3u2OHvKE",
            "youtubeId": "Bdn3u2OHvKE"
          },
          {
            "id": "thermodynamics-lesson-18",
            "title": "Heat Engines, Refrigerators, and Pumps - Review (old video)",
            "url": "https://www.youtube.com/watch?v=QBd2zraOe2k",
            "youtubeId": "QBd2zraOe2k"
          }
        ]
      },
      {
        "id": "physics-1c-final-exam-review",
        "title": "27 Test Questions",
        "url": "https://www.video-tutor.net/physics-1c-final-exam-review.html",
        "lessons": [
          {
            "id": "physics-1c-final-exam-review-lesson-1",
            "title": "27 Test Questions",
            "url": "https://www.youtube.com/watch?v=HPuo0R7ijJQ",
            "youtubeId": "HPuo0R7ijJQ"
          }
        ]
      },
      {
        "id": "electric-charge",
        "title": "Electric Charge",
        "url": "https://www.video-tutor.net/electric-charge.html",
        "lessons": [
          {
            "id": "electric-charge-lesson-1",
            "title": "Electric Charge",
            "url": "https://www.youtube.com/watch?v=VD009jiZreo",
            "youtubeId": "VD009jiZreo"
          },
          {
            "id": "electric-charge-lesson-2",
            "title": "Law of Conservation of Electric Charge",
            "url": "https://www.youtube.com/watch?v=OSUvXC1pACA",
            "youtubeId": "OSUvXC1pACA"
          },
          {
            "id": "electric-charge-lesson-3",
            "title": "Charging by Induction",
            "url": "https://www.youtube.com/watch?v=ZbBHnod_Mew",
            "youtubeId": "ZbBHnod_Mew"
          },
          {
            "id": "electric-charge-lesson-4",
            "title": "Coulomb's Law and Net Electric Force",
            "url": "https://www.youtube.com/watch?v=kCp5yYjo9zE",
            "youtubeId": "kCp5yYjo9zE"
          }
        ]
      },
      {
        "id": "the-electric-field",
        "title": "Electric Fields",
        "url": "https://www.video-tutor.net/the-electric-field.html",
        "lessons": [
          {
            "id": "the-electric-field-lesson-1",
            "title": "Electric Fields due to Point Charges",
            "url": "https://www.youtube.com/watch?v=V9RLc9EX1so",
            "youtubeId": "V9RLc9EX1so"
          },
          {
            "id": "the-electric-field-lesson-5",
            "title": "How to Draw Electric Field Lines of Point Charges",
            "url": "https://www.youtube.com/watch?v=AtbaYUYTawg",
            "youtubeId": "AtbaYUYTawg"
          },
          {
            "id": "the-electric-field-lesson-6",
            "title": "Electric Field Vector Formula with R-Hat and Position Vector",
            "url": "https://www.youtube.com/watch?v=pi4SvKZsNrg",
            "youtubeId": "pi4SvKZsNrg"
          },
          {
            "id": "the-electric-field-lesson-7",
            "title": "Introduction to Electric Flux",
            "url": "https://www.youtube.com/watch?v=q1eor6oIuUo",
            "youtubeId": "q1eor6oIuUo"
          },
          {
            "id": "the-electric-field-lesson-8",
            "title": "Gauss' Law and Electric Flux",
            "url": "https://www.youtube.com/watch?v=3u7m4M-FvOQ",
            "youtubeId": "3u7m4M-FvOQ"
          }
        ]
      },
      {
        "id": "the-electric-potential",
        "title": "Electric Potential",
        "url": "https://www.video-tutor.net/the-electric-potential.html",
        "lessons": [
          {
            "id": "the-electric-potential-lesson-1",
            "title": "The Electric Potential",
            "url": "https://www.youtube.com/watch?v=LzKMQByFSLc",
            "youtubeId": "LzKMQByFSLc"
          },
          {
            "id": "the-electric-potential-lesson-4",
            "title": "Equipotential Lines, Work, and Voltage",
            "url": "https://www.youtube.com/watch?v=j_Cy891cmIY",
            "youtubeId": "j_Cy891cmIY"
          },
          {
            "id": "the-electric-potential-lesson-5",
            "title": "The Electron Volt",
            "url": "https://www.youtube.com/watch?v=DjQl4J-jePc",
            "youtubeId": "DjQl4J-jePc"
          },
          {
            "id": "the-electric-potential-lesson-6",
            "title": "Electric Potential Energy",
            "url": "https://www.youtube.com/watch?v=KoZ61FujkRk",
            "youtubeId": "KoZ61FujkRk"
          }
        ]
      },
      {
        "id": "capacitors",
        "title": "Capacitors",
        "url": "https://www.video-tutor.net/capacitors.html",
        "lessons": [
          {
            "id": "capacitors-lesson-1",
            "title": "The Parallel Plate Capacitor",
            "url": "https://www.youtube.com/watch?v=7jJhHtegjto",
            "youtubeId": "7jJhHtegjto"
          },
          {
            "id": "capacitors-lesson-2",
            "title": "How to Calculate the Energy Stored in a Capacitor",
            "url": "https://www.youtube.com/watch?v=PTyB6_Kt_5A",
            "youtubeId": "PTyB6_Kt_5A"
          },
          {
            "id": "capacitors-lesson-3",
            "title": "The Energy Density of a Capacitor",
            "url": "https://www.youtube.com/watch?v=RiY-sHz-whw",
            "youtubeId": "RiY-sHz-whw"
          },
          {
            "id": "capacitors-lesson-4",
            "title": "Dielectrics and Capacitance",
            "url": "https://www.youtube.com/watch?v=HmZ4iK1T1bg",
            "youtubeId": "HmZ4iK1T1bg"
          },
          {
            "id": "capacitors-lesson-5",
            "title": "Review of Capacitors",
            "url": "https://www.youtube.com/watch?v=BimpNou0orc",
            "youtubeId": "BimpNou0orc"
          }
        ]
      },
      {
        "id": "electric-currents",
        "title": "Electric Currents",
        "url": "https://www.video-tutor.net/electric-currents.html",
        "lessons": [
          {
            "id": "electric-currents-lesson-1",
            "title": "The Electric Battery and Conventional Current",
            "url": "https://www.youtube.com/watch?v=xrf6I_5vX64",
            "youtubeId": "xrf6I_5vX64"
          },
          {
            "id": "electric-currents-lesson-2",
            "title": "The Ohm's Law Formula",
            "url": "https://www.youtube.com/watch?v=KMaQYdTJul0",
            "youtubeId": "KMaQYdTJul0"
          },
          {
            "id": "electric-currents-lesson-3",
            "title": "Voltage, Current, and Resistance",
            "url": "https://www.youtube.com/watch?v=08YugQce9OA",
            "youtubeId": "08YugQce9OA"
          },
          {
            "id": "electric-currents-lesson-4",
            "title": "What is Voltage?",
            "url": "https://www.youtube.com/watch?v=iQVgAVVXe6o",
            "youtubeId": "iQVgAVVXe6o"
          },
          {
            "id": "electric-currents-lesson-5",
            "title": "Electrical Formulas of Electricity",
            "url": "https://www.youtube.com/watch?v=Pv_-OU4Dluo",
            "youtubeId": "Pv_-OU4Dluo"
          },
          {
            "id": "electric-currents-lesson-6",
            "title": "Volts, Amps, and Watts Explained!",
            "url": "https://www.youtube.com/watch?v=PyLjnVJVM1s",
            "youtubeId": "PyLjnVJVM1s"
          },
          {
            "id": "electric-currents-lesson-7",
            "title": "Electric Current, Charge, Ohm's Law and Electric Power",
            "url": "https://www.youtube.com/watch?v=r-SCyD7f_zI",
            "youtubeId": "r-SCyD7f_zI"
          },
          {
            "id": "electric-currents-lesson-8",
            "title": "Ohm's Law - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=NxxNu9Cek1E",
            "youtubeId": "NxxNu9Cek1E"
          },
          {
            "id": "electric-currents-lesson-9",
            "title": "Electric Power and the Cost of Electricity",
            "url": "https://www.youtube.com/watch?v=i1TJV-9ljDs",
            "youtubeId": "i1TJV-9ljDs"
          },
          {
            "id": "electric-currents-lesson-10",
            "title": "Battery Capacity - Amp-hours, mAh, and Watt-hours",
            "url": "https://www.youtube.com/watch?v=5JZ8E7B4FAY",
            "youtubeId": "5JZ8E7B4FAY"
          },
          {
            "id": "electric-currents-lesson-11",
            "title": "Resistivity and Resistance",
            "url": "https://www.youtube.com/watch?v=PIJTu8z0-_U",
            "youtubeId": "PIJTu8z0-_U"
          },
          {
            "id": "electric-currents-lesson-12",
            "title": "Conductors and Insulators",
            "url": "https://www.youtube.com/watch?v=QrONohBedtk",
            "youtubeId": "QrONohBedtk"
          },
          {
            "id": "electric-currents-lesson-13",
            "title": "The Resistor Color Code",
            "url": "https://www.youtube.com/watch?v=G1mZutobxDU",
            "youtubeId": "G1mZutobxDU"
          },
          {
            "id": "electric-currents-lesson-14",
            "title": "Internal Resistance, EMF, and Terminal Voltage",
            "url": "https://www.youtube.com/watch?v=R1QN_0fcZ_8",
            "youtubeId": "R1QN_0fcZ_8"
          },
          {
            "id": "electric-currents-lesson-15",
            "title": "Drift Velocity and Current Density",
            "url": "https://www.youtube.com/watch?v=KiTkSZy79cw",
            "youtubeId": "KiTkSZy79cw"
          },
          {
            "id": "electric-currents-lesson-16",
            "title": "Potential Difference Between Two Points in an Electric Field",
            "url": "https://www.youtube.com/watch?v=vcbkvYDP5a8",
            "youtubeId": "vcbkvYDP5a8"
          },
          {
            "id": "electric-currents-lesson-17",
            "title": "Alternating Current vs Direct Current",
            "url": "https://www.youtube.com/watch?v=ERIToctYUcQ",
            "youtubeId": "ERIToctYUcQ"
          }
        ]
      },
      {
        "id": "dc-circuits",
        "title": "DC Circuits",
        "url": "https://www.video-tutor.net/dc-circuits.html",
        "lessons": [
          {
            "id": "dc-circuits-lesson-1",
            "title": "Schematic Diagrams and Electrical Symbols",
            "url": "https://www.youtube.com/watch?v=Dl1gFBNa0Ik",
            "youtubeId": "Dl1gFBNa0Ik"
          },
          {
            "id": "dc-circuits-lesson-2",
            "title": "Open, Closed, and Short Circuits",
            "url": "https://www.youtube.com/watch?v=v5RJf_V0LYA",
            "youtubeId": "v5RJf_V0LYA"
          },
          {
            "id": "dc-circuits-lesson-3",
            "title": "Resistors in Series",
            "url": "https://www.youtube.com/watch?v=9z53qVQjasU",
            "youtubeId": "9z53qVQjasU"
          },
          {
            "id": "dc-circuits-lesson-4",
            "title": "Resistors in Parallel",
            "url": "https://www.youtube.com/watch?v=SYrOiQs3X2U",
            "youtubeId": "SYrOiQs3X2U"
          },
          {
            "id": "dc-circuits-lesson-5",
            "title": "Series and Parallel Circuits - Light Bulb Brightness",
            "url": "https://www.youtube.com/watch?v=NjgxXcBfIII",
            "youtubeId": "NjgxXcBfIII"
          },
          {
            "id": "dc-circuits-lesson-6",
            "title": "Equivalent Resistance of Complex Circuits",
            "url": "https://www.youtube.com/watch?v=kjW4H3fKi8o",
            "youtubeId": "kjW4H3fKi8o"
          },
          {
            "id": "dc-circuits-lesson-7",
            "title": "Resistors in Series and Parallel Circuits",
            "url": "https://www.youtube.com/watch?v=dEuBykX5_B4",
            "youtubeId": "dEuBykX5_B4"
          },
          {
            "id": "dc-circuits-lesson-8",
            "title": "How to Solve Complex DC Circuits",
            "url": "https://www.youtube.com/watch?v=eFlJy0cPbsY",
            "youtubeId": "eFlJy0cPbsY"
          },
          {
            "id": "dc-circuits-lesson-9",
            "title": "The Voltage Divider Circuit",
            "url": "https://www.youtube.com/watch?v=JGXdi7XcQi8",
            "youtubeId": "JGXdi7XcQi8"
          },
          {
            "id": "dc-circuits-lesson-10",
            "title": "The Current Divider Circuit",
            "url": "https://www.youtube.com/watch?v=PpfOH_uBKCw",
            "youtubeId": "PpfOH_uBKCw"
          },
          {
            "id": "dc-circuits-lesson-11",
            "title": "Kirchoff's Current Law and KCL Circuits",
            "url": "https://www.youtube.com/watch?v=Q39xQUlTGew",
            "youtubeId": "Q39xQUlTGew"
          },
          {
            "id": "dc-circuits-lesson-12",
            "title": "Kirchoff's Voltage Law and KVL Circuits",
            "url": "https://www.youtube.com/watch?v=6F_rmZ1nXFQ",
            "youtubeId": "6F_rmZ1nXFQ"
          },
          {
            "id": "dc-circuits-lesson-13",
            "title": "KCL and KVL Circuit Analysis",
            "url": "https://www.youtube.com/watch?v=2Zu3ppq3n8I",
            "youtubeId": "2Zu3ppq3n8I"
          },
          {
            "id": "dc-circuits-lesson-14",
            "title": "Thevenin's Theorem",
            "url": "https://www.youtube.com/watch?v=zTDgziJC-q8",
            "youtubeId": "zTDgziJC-q8"
          },
          {
            "id": "dc-circuits-lesson-15",
            "title": "Norton's Theorem",
            "url": "https://www.youtube.com/watch?v=-kkvqr1wSwA",
            "youtubeId": "-kkvqr1wSwA"
          },
          {
            "id": "dc-circuits-lesson-16",
            "title": "Superposition Theorem",
            "url": "https://www.youtube.com/watch?v=EX52BuZxpQM",
            "youtubeId": "EX52BuZxpQM"
          },
          {
            "id": "dc-circuits-lesson-17",
            "title": "Maximum Power Transfer Theorem with Nodal Analysis",
            "url": "https://www.youtube.com/watch?v=8CA6ZNXgI-Y",
            "youtubeId": "8CA6ZNXgI-Y"
          },
          {
            "id": "dc-circuits-lesson-18",
            "title": "Equivalent Capacitance",
            "url": "https://www.youtube.com/watch?v=PPhSmZ6w9WY",
            "youtubeId": "PPhSmZ6w9WY"
          },
          {
            "id": "dc-circuits-lesson-19",
            "title": "Capacitors in Series and Parallel",
            "url": "https://www.youtube.com/watch?v=zaT4JorVUz0",
            "youtubeId": "zaT4JorVUz0"
          },
          {
            "id": "dc-circuits-lesson-20",
            "title": "Capacitors in Series / Parallel Combination Circuits",
            "url": "https://www.youtube.com/watch?v=a-gPuw6JsxQ",
            "youtubeId": "a-gPuw6JsxQ"
          },
          {
            "id": "dc-circuits-lesson-21",
            "title": "Electron Flow of Capacitors in Charging and Discharging Cycles",
            "url": "https://www.youtube.com/watch?v=iQZknlJjaj4",
            "youtubeId": "iQZknlJjaj4"
          },
          {
            "id": "dc-circuits-lesson-22",
            "title": "RC Circuits - Time Constant",
            "url": "https://www.youtube.com/watch?v=PLQrPqYlPmI",
            "youtubeId": "PLQrPqYlPmI"
          },
          {
            "id": "dc-circuits-lesson-23",
            "title": "Voltmeters, Ammeters, and Galvanometers, and Shunt Resistors",
            "url": "https://www.youtube.com/watch?v=NLPSHwDUYrY",
            "youtubeId": "NLPSHwDUYrY"
          },
          {
            "id": "dc-circuits-lesson-24",
            "title": "How to Solve the Wheatstone Bridge Circuit",
            "url": "https://www.youtube.com/watch?v=jFvVtB10B1I",
            "youtubeId": "jFvVtB10B1I"
          }
        ]
      },
      {
        "id": "magnetism",
        "title": "Magnetism",
        "url": "https://www.video-tutor.net/magnetism.html",
        "lessons": [
          {
            "id": "magnetism-lesson-1",
            "title": "Magnetic Force on a Current Carrying Wire",
            "url": "https://www.youtube.com/watch?v=nv28Cp-ILJ0",
            "youtubeId": "nv28Cp-ILJ0"
          },
          {
            "id": "magnetism-lesson-2",
            "title": "The Homopolar Motor",
            "url": "https://www.youtube.com/watch?v=6Oj4qvCR6ow",
            "youtubeId": "6Oj4qvCR6ow"
          },
          {
            "id": "magnetism-lesson-3",
            "title": "Magnetic Force on a Moving Charge in a Magnetic Field",
            "url": "https://www.youtube.com/watch?v=7MBawzone30",
            "youtubeId": "7MBawzone30"
          },
          {
            "id": "magnetism-lesson-4",
            "title": "Battery Powered Electric Motor",
            "url": "https://www.youtube.com/watch?v=6ThH8IpsqAA",
            "youtubeId": "6ThH8IpsqAA"
          },
          {
            "id": "magnetism-lesson-5",
            "title": "Magnetic Field of a Straight Current Carrying Wire",
            "url": "https://www.youtube.com/watch?v=wZlHLHnZSRg",
            "youtubeId": "wZlHLHnZSRg"
          },
          {
            "id": "magnetism-lesson-6",
            "title": "Magnetic Sensors - The Reed Switch",
            "url": "https://www.youtube.com/watch?v=pw9_xmbFi6E",
            "youtubeId": "pw9_xmbFi6E"
          },
          {
            "id": "magnetism-lesson-7",
            "title": "Magnetic Force Between Two Parallel Current Carrying Wires",
            "url": "https://www.youtube.com/watch?v=8T_dP7Oq620",
            "youtubeId": "8T_dP7Oq620"
          },
          {
            "id": "magnetism-lesson-8",
            "title": "Ampere's Law and Magnetic Field of a Solenoid",
            "url": "https://www.youtube.com/watch?v=lLQQjwuqdeg",
            "youtubeId": "lLQQjwuqdeg"
          },
          {
            "id": "magnetism-lesson-9",
            "title": "Magnetic Field of a Toroidal Solenoid",
            "url": "https://www.youtube.com/watch?v=XWtscd-IoDU",
            "youtubeId": "XWtscd-IoDU"
          },
          {
            "id": "magnetism-lesson-10",
            "title": "Magnetic Field of a Moving Charge",
            "url": "https://www.youtube.com/watch?v=CXChim2gOzs",
            "youtubeId": "CXChim2gOzs"
          },
          {
            "id": "magnetism-lesson-11",
            "title": "Torque on a Current Loop in a Magnetic Field",
            "url": "https://www.youtube.com/watch?v=-l-aajUS_Ik",
            "youtubeId": "-l-aajUS_Ik"
          },
          {
            "id": "magnetism-lesson-12",
            "title": "The Hall Effect",
            "url": "https://www.youtube.com/watch?v=pnbRXo1q-nE",
            "youtubeId": "pnbRXo1q-nE"
          },
          {
            "id": "magnetism-lesson-13",
            "title": "The Magnetic Flux",
            "url": "https://www.youtube.com/watch?v=y30ATrKpwpU",
            "youtubeId": "y30ATrKpwpU"
          }
        ]
      },
      {
        "id": "electromagnetic-induction",
        "title": "Electromagnetic Induction",
        "url": "https://www.video-tutor.net/electromagnetic-induction.html",
        "lessons": [
          {
            "id": "electromagnetic-induction-lesson-1",
            "title": "Faraday's Law of Electromagnetic Induction",
            "url": "https://www.youtube.com/watch?v=LDOa7UdfcMQ",
            "youtubeId": "LDOa7UdfcMQ"
          },
          {
            "id": "electromagnetic-induction-lesson-2",
            "title": "Lenz's Law",
            "url": "https://www.youtube.com/watch?v=HhFZfWLl-P0",
            "youtubeId": "HhFZfWLl-P0"
          },
          {
            "id": "electromagnetic-induction-lesson-3",
            "title": "Wireless Charging",
            "url": "https://www.youtube.com/watch?v=ncWuFOO3lxM",
            "youtubeId": "ncWuFOO3lxM"
          },
          {
            "id": "electromagnetic-induction-lesson-4",
            "title": "Induced EMF in a Moving Conductor",
            "url": "https://www.youtube.com/watch?v=ogPT-Py-ss0",
            "youtubeId": "ogPT-Py-ss0"
          },
          {
            "id": "electromagnetic-induction-lesson-5",
            "title": "Electric Generators",
            "url": "https://www.youtube.com/watch?v=-QJS6i1bhG4",
            "youtubeId": "-QJS6i1bhG4"
          },
          {
            "id": "electromagnetic-induction-lesson-6",
            "title": "Counter EMF of DC Motors",
            "url": "https://www.youtube.com/watch?v=a7oj0REQzpE",
            "youtubeId": "a7oj0REQzpE"
          },
          {
            "id": "electromagnetic-induction-lesson-7",
            "title": "Transformer Physics Problems",
            "url": "https://www.youtube.com/watch?v=GJm-FOMeG4E",
            "youtubeId": "GJm-FOMeG4E"
          },
          {
            "id": "electromagnetic-induction-lesson-8",
            "title": "Mutual Inductance of Solenoids",
            "url": "https://www.youtube.com/watch?v=_w0vk7lFoqc",
            "youtubeId": "_w0vk7lFoqc"
          },
          {
            "id": "electromagnetic-induction-lesson-9",
            "title": "Self-Inductance of Inductance and Toroidal Solenoids",
            "url": "https://www.youtube.com/watch?v=gMn0MDl4vkc",
            "youtubeId": "gMn0MDl4vkc"
          },
          {
            "id": "electromagnetic-induction-lesson-10",
            "title": "How to Make an Electromagnet",
            "url": "https://www.youtube.com/watch?v=4BUsCLPMQtk",
            "youtubeId": "4BUsCLPMQtk"
          },
          {
            "id": "electromagnetic-induction-lesson-11",
            "title": "Electromagnetic Induction - More Practice Problems",
            "url": "https://www.youtube.com/watch?v=jz92oOkJFNA",
            "youtubeId": "jz92oOkJFNA"
          },
          {
            "id": "electromagnetic-induction-lesson-12",
            "title": "Energy Stored in an Inductor and Magnetic Field Energy Density",
            "url": "https://www.youtube.com/watch?v=Yl2VeN1Zeu8",
            "youtubeId": "Yl2VeN1Zeu8"
          },
          {
            "id": "electromagnetic-induction-lesson-13",
            "title": "RL Circuits",
            "url": "https://www.youtube.com/watch?v=RR0sQeDAxgk",
            "youtubeId": "RR0sQeDAxgk"
          }
        ]
      },
      {
        "id": "ac-circuits",
        "title": "AC Circuits",
        "url": "https://www.video-tutor.net/ac-circuits.html",
        "lessons": [
          {
            "id": "ac-circuits-lesson-1",
            "title": "Introduction to AC Circuits",
            "url": "https://www.youtube.com/watch?v=tcP9c6SnGQs",
            "youtubeId": "tcP9c6SnGQs"
          },
          {
            "id": "ac-circuits-lesson-3",
            "title": "Capacitive Reactance of RC Circuits",
            "url": "https://www.youtube.com/watch?v=ZOn0L42cyFE",
            "youtubeId": "ZOn0L42cyFE"
          },
          {
            "id": "ac-circuits-lesson-4",
            "title": "Inductive Reactance of RL Circuits",
            "url": "https://www.youtube.com/watch?v=5uftqyvUKSc",
            "youtubeId": "5uftqyvUKSc"
          },
          {
            "id": "ac-circuits-lesson-5",
            "title": "Impedance of RLC Circuits",
            "url": "https://www.youtube.com/watch?v=8D9XPDNY3Mk",
            "youtubeId": "8D9XPDNY3Mk"
          },
          {
            "id": "ac-circuits-lesson-6",
            "title": "Resonant Frequency of LC Circuits",
            "url": "https://www.youtube.com/watch?v=r72f0ZZusT0",
            "youtubeId": "r72f0ZZusT0"
          },
          {
            "id": "ac-circuits-lesson-7",
            "title": "How to Solve Series RLC Circuits",
            "url": "https://www.youtube.com/watch?v=2GvqQvohP2k",
            "youtubeId": "2GvqQvohP2k"
          },
          {
            "id": "ac-circuits-lesson-8",
            "title": "How to Solve Parallel RLC Circuits",
            "url": "https://www.youtube.com/watch?v=8MMzeeHNjIw",
            "youtubeId": "8MMzeeHNjIw"
          }
        ]
      },
      {
        "id": "electromagnetic-waves",
        "title": "Electromagnetic Waves",
        "url": "https://www.video-tutor.net/electromagnetic-waves.html",
        "lessons": [
          {
            "id": "electromagnetic-waves-lesson-1",
            "title": "Maxwell's Equations and Electromagnetic Waves",
            "url": "https://www.youtube.com/watch?v=mOEFTX9DAEw",
            "youtubeId": "mOEFTX9DAEw"
          }
        ]
      },
      {
        "id": "light-and-optics",
        "title": "Light and Optics",
        "url": "https://www.video-tutor.net/light-and-optics.html",
        "lessons": [
          {
            "id": "light-and-optics-lesson-1",
            "title": "The Law of Reflection",
            "url": "https://www.youtube.com/watch?v=yscrBkfPRyc",
            "youtubeId": "yscrBkfPRyc"
          },
          {
            "id": "light-and-optics-lesson-2",
            "title": "Introduction to Ray Diagrams",
            "url": "https://www.youtube.com/watch?v=dBOzdoIsOEI",
            "youtubeId": "dBOzdoIsOEI"
          },
          {
            "id": "light-and-optics-lesson-3",
            "title": "Spherical Mirrors and the Mirror Equation",
            "url": "https://www.youtube.com/watch?v=efPZ5uSDeuI",
            "youtubeId": "efPZ5uSDeuI"
          },
          {
            "id": "light-and-optics-lesson-4",
            "title": "The Refraction of Light",
            "url": "https://www.youtube.com/watch?v=ON1QGqB6vxg",
            "youtubeId": "ON1QGqB6vxg"
          },
          {
            "id": "light-and-optics-lesson-5",
            "title": "Snell's Law and the Index of Refraction Practice Problems",
            "url": "https://www.youtube.com/watch?v=ohQheheySDw",
            "youtubeId": "ohQheheySDw"
          },
          {
            "id": "light-and-optics-lesson-6",
            "title": "Total Internal Reflection and the Critical Angle",
            "url": "https://www.youtube.com/watch?v=a20C08qmC_o",
            "youtubeId": "a20C08qmC_o"
          },
          {
            "id": "light-and-optics-lesson-7",
            "title": "The Thin Lens Equation",
            "url": "https://www.youtube.com/watch?v=7ehfXmO42h8",
            "youtubeId": "7ehfXmO42h8"
          }
        ]
      },
      {
        "id": "the-wave-nature-of-light",
        "title": "The Wave Nature of Light",
        "url": "https://www.video-tutor.net/the-wave-nature-of-light.html",
        "lessons": [
          {
            "id": "the-wave-nature-of-light-lesson-1",
            "title": "The Huygens Principle",
            "url": "https://www.youtube.com/watch?v=ANsHXbIoA6U",
            "youtubeId": "ANsHXbIoA6U"
          },
          {
            "id": "the-wave-nature-of-light-lesson-2",
            "title": "Young's Double Slit Experiment",
            "url": "https://www.youtube.com/watch?v=xaAthgG0o8o",
            "youtubeId": "xaAthgG0o8o"
          },
          {
            "id": "the-wave-nature-of-light-lesson-3",
            "title": "Single Slit Diffraction",
            "url": "https://www.youtube.com/watch?v=9hCrhllI0ck",
            "youtubeId": "9hCrhllI0ck"
          },
          {
            "id": "the-wave-nature-of-light-lesson-4",
            "title": "Diffraction Grating Problems",
            "url": "https://www.youtube.com/watch?v=gf7j2fumz70",
            "youtubeId": "gf7j2fumz70"
          },
          {
            "id": "the-wave-nature-of-light-lesson-5",
            "title": "Malus Law and Polarization of Light Problems",
            "url": "https://www.youtube.com/watch?v=guqs0uXFpiU",
            "youtubeId": "guqs0uXFpiU"
          },
          {
            "id": "the-wave-nature-of-light-lesson-6",
            "title": "Brewster's Angle",
            "url": "https://www.youtube.com/watch?v=PqXRrKHU74s",
            "youtubeId": "PqXRrKHU74s"
          },
          {
            "id": "the-wave-nature-of-light-lesson-7",
            "title": "Planck's Constant and Blackbody Radiation",
            "url": "https://www.youtube.com/watch?v=bF3WAOBejqg",
            "youtubeId": "bF3WAOBejqg"
          },
          {
            "id": "the-wave-nature-of-light-lesson-8",
            "title": "Photon Momentum and Effective Mass",
            "url": "https://www.youtube.com/watch?v=0Ycwm0Ybzh4",
            "youtubeId": "0Ycwm0Ybzh4"
          },
          {
            "id": "the-wave-nature-of-light-lesson-9",
            "title": "Blackbody Radiation and Wien's Law",
            "url": "https://www.youtube.com/watch?v=yCNcbkLFTFs",
            "youtubeId": "yCNcbkLFTFs"
          },
          {
            "id": "the-wave-nature-of-light-lesson-10",
            "title": "The Compton Effect and Compton Wavelength",
            "url": "https://www.youtube.com/watch?v=hzwykQ7KSRE",
            "youtubeId": "hzwykQ7KSRE"
          }
        ]
      },
      {
        "id": "physics-2-final-exam-review",
        "title": "57 Test Questions",
        "url": "https://www.video-tutor.net/physics-2-final-exam-review.html",
        "lessons": [
          {
            "id": "physics-2-final-exam-review-lesson-1",
            "title": "15 Test Questions",
            "url": "https://www.youtube.com/watch?v=oH_V1WipnmE",
            "youtubeId": "oH_V1WipnmE"
          }
        ]
      },
    ]
  },
  {
    "id": "organic-chemistry",
    "title": "Organic Chemistry",
    "url": "https://www.video-tutor.net/organic-chemistry.html",
    "chapters": [
      {
        "id": "organic-structures",
        "title": "Organic Structures",
        "url": "https://www.video-tutor.net/organic-structures.html",
        "lessons": [
          {
            "id": "organic-structures-lesson-1",
            "title": "Introduction to Organic Chemistry",
            "url": "https://www.youtube.com/watch?v=B_ketdzJtY8",
            "youtubeId": "B_ketdzJtY8"
          },
          {
            "id": "organic-structures-lesson-2",
            "title": "Ionic Bonds, Polar Covalent Bonds, and Nonpolar Covalent Bonds",
            "url": "https://www.youtube.com/watch?v=8NQzcpWvq4g",
            "youtubeId": "8NQzcpWvq4g"
          },
          {
            "id": "organic-structures-lesson-3",
            "title": "Which Bond is More Polar?",
            "url": "https://www.youtube.com/watch?v=o0-a5HzSzdE",
            "youtubeId": "o0-a5HzSzdE"
          },
          {
            "id": "organic-structures-lesson-4",
            "title": "Electrostatic Potential Maps",
            "url": "https://www.youtube.com/watch?v=Sd_2RwNE4iU",
            "youtubeId": "Sd_2RwNE4iU"
          },
          {
            "id": "organic-structures-lesson-5",
            "title": "How to Draw Lewis Structures",
            "url": "https://www.youtube.com/watch?v=6unef5Hz6SU",
            "youtubeId": "6unef5Hz6SU"
          },
          {
            "id": "organic-structures-lesson-6",
            "title": "Kekule Structures and Condensed Structures",
            "url": "https://www.youtube.com/watch?v=XyH3r9dzH2A",
            "youtubeId": "XyH3r9dzH2A"
          },
          {
            "id": "organic-structures-lesson-7",
            "title": "Converting Condensed Structures to Skeletal Structures",
            "url": "https://www.youtube.com/watch?v=HRkvjKHFNDA",
            "youtubeId": "HRkvjKHFNDA"
          },
          {
            "id": "organic-structures-lesson-8",
            "title": "Functional Groups",
            "url": "https://www.youtube.com/watch?v=m9jM8lWxrAE",
            "youtubeId": "m9jM8lWxrAE"
          },
          {
            "id": "organic-structures-lesson-9",
            "title": "Unusual Functional Groups",
            "url": "https://www.youtube.com/watch?v=6RpvsHA4yHg",
            "youtubeId": "6RpvsHA4yHg"
          },
          {
            "id": "organic-structures-lesson-10",
            "title": "Primary, Secondary, and Tertiary Functional Groups",
            "url": "https://www.youtube.com/watch?v=r_Zhb0nQEvE",
            "youtubeId": "r_Zhb0nQEvE"
          },
          {
            "id": "organic-structures-lesson-11",
            "title": "More Examples on Drawing Structures",
            "url": "https://www.youtube.com/watch?v=bFn-OjeWNAw",
            "youtubeId": "bFn-OjeWNAw"
          },
          {
            "id": "organic-structures-lesson-12",
            "title": "Formal Charge",
            "url": "https://www.youtube.com/watch?v=C2l-76VP8s0",
            "youtubeId": "C2l-76VP8s0"
          },
          {
            "id": "organic-structures-lesson-13",
            "title": "How to Calculate the Number of Lone Pairs",
            "url": "https://www.youtube.com/watch?v=jlCPY6iXQ1c",
            "youtubeId": "jlCPY6iXQ1c"
          }
        ]
      },
      {
        "id": "atomic-orbitals",
        "title": "Hybridization & Resonance",
        "url": "https://www.video-tutor.net/atomic-orbitals.html",
        "lessons": [
          {
            "id": "atomic-orbitals-lesson-1",
            "title": "Predicting Bond Angles",
            "url": "https://www.youtube.com/watch?v=DPS7zdg8HzY",
            "youtubeId": "DPS7zdg8HzY"
          },
          {
            "id": "atomic-orbitals-lesson-2",
            "title": "VSEPR Theory & Molecular Geometry",
            "url": "https://www.youtube.com/watch?v=DBrq31w8vC4",
            "youtubeId": "DBrq31w8vC4"
          },
          {
            "id": "atomic-orbitals-lesson-3",
            "title": "Valence Bond Theory",
            "url": "https://www.youtube.com/watch?v=Vqx9a2aU99c",
            "youtubeId": "Vqx9a2aU99c"
          },
          {
            "id": "atomic-orbitals-lesson-5",
            "title": "Hybridization of Atomic Orbitals",
            "url": "https://www.youtube.com/watch?v=pdJeQUd2g_4",
            "youtubeId": "pdJeQUd2g_4"
          },
          {
            "id": "atomic-orbitals-lesson-7",
            "title": "Bond Strength and Bond Length",
            "url": "https://www.youtube.com/watch?v=SSRY95IAwF8",
            "youtubeId": "SSRY95IAwF8"
          },
          {
            "id": "atomic-orbitals-lesson-8",
            "title": "Hybridization, Orbital Overlap, and Bond Length",
            "url": "https://www.youtube.com/watch?v=BatJrR5sblA",
            "youtubeId": "BatJrR5sblA"
          },
          {
            "id": "atomic-orbitals-lesson-9",
            "title": "Steric Number, Hybridization, and Orbital Overlap",
            "url": "https://www.youtube.com/watch?v=8WWssBFhSHU",
            "youtubeId": "8WWssBFhSHU"
          },
          {
            "id": "atomic-orbitals-lesson-10",
            "title": "Dipole Moment, Molecular Polarity, & Percent Ionic Character",
            "url": "https://www.youtube.com/watch?v=l1GgVwqiufE",
            "youtubeId": "l1GgVwqiufE"
          },
          {
            "id": "atomic-orbitals-lesson-11",
            "title": "Dipole Moment, Vectors, & Electronegativity - Test Question",
            "url": "https://www.youtube.com/watch?v=bFAU1GMJmnI",
            "youtubeId": "bFAU1GMJmnI"
          },
          {
            "id": "atomic-orbitals-lesson-12",
            "title": "Intermolecular Forces - Hydrogen Bonding & Dipole Interactions",
            "url": "https://www.youtube.com/watch?v=XSRa9P-xJl0",
            "youtubeId": "XSRa9P-xJl0"
          },
          {
            "id": "atomic-orbitals-lesson-13",
            "title": "Curve Arrow Notation and Electron Pushing Arrows",
            "url": "https://www.youtube.com/watch?v=UVpizSVIBX0",
            "youtubeId": "UVpizSVIBX0"
          },
          {
            "id": "atomic-orbitals-lesson-14",
            "title": "Resonance Structures",
            "url": "https://www.youtube.com/watch?v=OqsOIp5UuME",
            "youtubeId": "OqsOIp5UuME"
          },
          {
            "id": "atomic-orbitals-lesson-16",
            "title": "Bond Order and Resonance Structures",
            "url": "https://www.youtube.com/watch?v=5S6Ida95EQ0",
            "youtubeId": "5S6Ida95EQ0"
          },
          {
            "id": "atomic-orbitals-lesson-17",
            "title": "The Major Resonance Contributor - Test Question",
            "url": "https://www.youtube.com/watch?v=klAT2MACt4Q",
            "youtubeId": "klAT2MACt4Q"
          }
        ]
      },
      {
        "id": "acids-and-bases-organic-chemistry",
        "title": "Acids and Bases",
        "url": "https://www.video-tutor.net/acids-and-bases-organic-chemistry.html",
        "lessons": [
          {
            "id": "acids-and-bases-organic-chemistry-lesson-1",
            "title": "pKa, Ka, and Acid Strength",
            "url": "https://www.youtube.com/watch?v=IQ6gHQAg_Nk",
            "youtubeId": "IQ6gHQAg_Nk"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-2",
            "title": "Introduction to Acids and Bases",
            "url": "https://www.youtube.com/watch?v=owVZiKnnPME",
            "youtubeId": "owVZiKnnPME"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-4",
            "title": "Stability of Negative Charges",
            "url": "https://www.youtube.com/watch?v=TbW3Ia2EDaE",
            "youtubeId": "TbW3Ia2EDaE"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-5",
            "title": "pKa Values of Acids",
            "url": "https://www.youtube.com/watch?v=L7flgA0n_tc",
            "youtubeId": "L7flgA0n_tc"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-7",
            "title": "Ranking Protons in Order of Increasing Acidity Using pKa Values",
            "url": "https://www.youtube.com/watch?v=-w9onMbY9jA",
            "youtubeId": "-w9onMbY9jA"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-8",
            "title": "The Inductive Effect",
            "url": "https://www.youtube.com/watch?v=F7mbfPmOugY",
            "youtubeId": "F7mbfPmOugY"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-9",
            "title": "Properties of Acids and Bases - Test Question",
            "url": "https://www.youtube.com/watch?v=OvQufqTyw54",
            "youtubeId": "OvQufqTyw54"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-10",
            "title": "Resonance Stabilization of the Conjugate Base - Test Question",
            "url": "https://www.youtube.com/watch?v=MAjy2WMkPHc",
            "youtubeId": "MAjy2WMkPHc"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-11",
            "title": "Solvating Effects",
            "url": "https://www.youtube.com/watch?v=vxPKEYhp-ss",
            "youtubeId": "vxPKEYhp-ss"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-12",
            "title": "The Leveling Effect",
            "url": "https://www.youtube.com/watch?v=tgvSvniFJtc",
            "youtubeId": "tgvSvniFJtc"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-13",
            "title": "How to Predict the Reactant and Reagent of Acid Base Reactions",
            "url": "https://www.youtube.com/watch?v=qoVAD6Yik6M",
            "youtubeId": "qoVAD6Yik6M"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-14",
            "title": "Lewis Acids and Bases",
            "url": "https://www.youtube.com/watch?v=rmaLsdFQ2KQ",
            "youtubeId": "rmaLsdFQ2KQ"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-15",
            "title": "Nucleophiles and Electrophiles",
            "url": "https://www.youtube.com/watch?v=9QZj-F-5PV4",
            "youtubeId": "9QZj-F-5PV4"
          },
          {
            "id": "acids-and-bases-organic-chemistry-lesson-16",
            "title": "How to Predict the Position of Equilibrium Using pKa Values",
            "url": "https://www.youtube.com/watch?v=PRZCXUeq28Q",
            "youtubeId": "PRZCXUeq28Q"
          }
        ]
      },
      {
        "id": "iupac-nomenclature",
        "title": "IUPAC Nomenclature",
        "url": "https://www.video-tutor.net/iupac-nomenclature.html",
        "lessons": [
          {
            "id": "iupac-nomenclature-lesson-1",
            "title": "Hydrocarbons - Saturated and Unsaturated Compounds",
            "url": "https://www.youtube.com/watch?v=z5hQ8iZZ8dU",
            "youtubeId": "z5hQ8iZZ8dU"
          },
          {
            "id": "iupac-nomenclature-lesson-2",
            "title": "Constitutional Isomers",
            "url": "https://www.youtube.com/watch?v=48rsf1pOhfA",
            "youtubeId": "48rsf1pOhfA"
          },
          {
            "id": "iupac-nomenclature-lesson-3",
            "title": "IUPAC Nomenclature of Alkanes",
            "url": "https://www.youtube.com/watch?v=TYU_JluleME",
            "youtubeId": "TYU_JluleME"
          },
          {
            "id": "iupac-nomenclature-lesson-5",
            "title": "How to Name Cycloalkanes",
            "url": "https://www.youtube.com/watch?v=vSxZm_91GT0",
            "youtubeId": "vSxZm_91GT0"
          },
          {
            "id": "iupac-nomenclature-lesson-6",
            "title": "How to Name Bicyclic Compounds",
            "url": "https://www.youtube.com/watch?v=L8wEn7sD_SA",
            "youtubeId": "L8wEn7sD_SA"
          },
          {
            "id": "iupac-nomenclature-lesson-7",
            "title": "How to Name Ethers",
            "url": "https://www.youtube.com/watch?v=MZbgA0w2Ts4",
            "youtubeId": "MZbgA0w2Ts4"
          },
          {
            "id": "iupac-nomenclature-lesson-8",
            "title": "How to Name Alcohols",
            "url": "https://www.youtube.com/watch?v=kggg1dqvxX8",
            "youtubeId": "kggg1dqvxX8"
          },
          {
            "id": "iupac-nomenclature-lesson-9",
            "title": "How to Name Alkyl Halides",
            "url": "https://www.youtube.com/watch?v=595ENX3iqEE",
            "youtubeId": "595ENX3iqEE"
          },
          {
            "id": "iupac-nomenclature-lesson-10",
            "title": "How to Name Amines",
            "url": "https://www.youtube.com/watch?v=Y6AzMr0Fn3Y",
            "youtubeId": "Y6AzMr0Fn3Y"
          }
        ]
      },
      {
        "id": "alkane-properties",
        "title": "Alkanes and Cycloalkanes",
        "url": "https://www.video-tutor.net/alkane-properties.html",
        "lessons": [
          {
            "id": "alkane-properties-lesson-1",
            "title": "Van Der Waal Forces",
            "url": "https://www.youtube.com/watch?v=c3g3maYegBk",
            "youtubeId": "c3g3maYegBk"
          },
          {
            "id": "alkane-properties-lesson-2",
            "title": "Intermolecular Forces",
            "url": "https://www.youtube.com/watch?v=XSRa9P-xJl0",
            "youtubeId": "XSRa9P-xJl0"
          },
          {
            "id": "alkane-properties-lesson-3",
            "title": "Boiling Points of Organic Compounds",
            "url": "https://www.youtube.com/watch?v=Qk_uPsq10TI",
            "youtubeId": "Qk_uPsq10TI"
          },
          {
            "id": "alkane-properties-lesson-4",
            "title": "Melting Points of Alkanes",
            "url": "https://www.youtube.com/watch?v=WXFzlDBV_kY",
            "youtubeId": "WXFzlDBV_kY"
          },
          {
            "id": "alkane-properties-lesson-5",
            "title": "Boiling Points of Alkanes",
            "url": "https://www.youtube.com/watch?v=KsCAY_66jsY",
            "youtubeId": "KsCAY_66jsY"
          },
          {
            "id": "alkane-properties-lesson-6",
            "title": "Physical Properties of Alkanes - Test Question",
            "url": "https://www.youtube.com/watch?v=F2x8wMWPpec",
            "youtubeId": "F2x8wMWPpec"
          },
          {
            "id": "alkane-properties-lesson-7",
            "title": "Water Solubility of Vitamins",
            "url": "https://www.youtube.com/watch?v=BOady1INhxo",
            "youtubeId": "BOady1INhxo"
          },
          {
            "id": "alkane-properties-lesson-8",
            "title": "Homolytic and Heterolytic Bond Cleavages",
            "url": "https://www.youtube.com/watch?v=2X6R-5RQlCU",
            "youtubeId": "2X6R-5RQlCU"
          },
          {
            "id": "alkane-properties-lesson-9",
            "title": "Newman Projections",
            "url": "https://www.youtube.com/watch?v=_CCHTptAhLQ",
            "youtubeId": "_CCHTptAhLQ"
          },
          {
            "id": "alkane-properties-lesson-12",
            "title": "Perspective Formula to Newman Projection - Test Question",
            "url": "https://www.youtube.com/watch?v=XcEG2-3PWxs",
            "youtubeId": "XcEG2-3PWxs"
          },
          {
            "id": "alkane-properties-lesson-13",
            "title": "IUPAC Nomenclature of Newman Projections - Test Question",
            "url": "https://www.youtube.com/watch?v=KyS7tnjVoj4",
            "youtubeId": "KyS7tnjVoj4"
          },
          {
            "id": "alkane-properties-lesson-14",
            "title": "Torsional Strain and Steric Strain",
            "url": "https://www.youtube.com/watch?v=dBOKQI-5iw8",
            "youtubeId": "dBOKQI-5iw8"
          },
          {
            "id": "alkane-properties-lesson-15",
            "title": "Angle Strain - Stability of Cycloalkanes",
            "url": "https://www.youtube.com/watch?v=b0QJdfJku9w",
            "youtubeId": "b0QJdfJku9w"
          },
          {
            "id": "alkane-properties-lesson-16",
            "title": "Chair Conformations and Ring Flips",
            "url": "https://www.youtube.com/watch?v=RXU_32X1oFI",
            "youtubeId": "RXU_32X1oFI"
          },
          {
            "id": "alkane-properties-lesson-19",
            "title": "How to Draw the Chair Conformation of Inositol - Test Question",
            "url": "https://www.youtube.com/watch?v=aof9QBID8c4",
            "youtubeId": "aof9QBID8c4"
          },
          {
            "id": "alkane-properties-lesson-20",
            "title": "IUPAC Nomenclature with Chair Conformations",
            "url": "https://www.youtube.com/watch?v=1xxsqpRBh5Y",
            "youtubeId": "1xxsqpRBh5Y"
          },
          {
            "id": "alkane-properties-lesson-21",
            "title": "The Boat Conformation of Cyclohexane",
            "url": "https://www.youtube.com/watch?v=fVOlOWRk7_c",
            "youtubeId": "fVOlOWRk7_c"
          }
        ]
      },
      {
        "id": "organic-chemistry-1-exam-1",
        "title": "90 Test Questions",
        "url": "https://www.video-tutor.net/organic-chemistry-1-exam-1.html",
        "lessons": [
          {
            "id": "organic-chemistry-1-exam-1-lesson-1",
            "title": "Exam 1 Study Guide Review",
            "url": "https://www.youtube.com/watch?v=7ofZXNAG3AY",
            "youtubeId": "7ofZXNAG3AY"
          },
          {
            "id": "organic-chemistry-1-exam-1-lesson-3",
            "title": "9 Test Questions",
            "url": "https://www.youtube.com/watch?v=YT8F6pUbLJw",
            "youtubeId": "YT8F6pUbLJw"
          }
        ]
      },
      {
        "id": "stereo-chemistry",
        "title": "Stereochemistry",
        "url": "https://www.video-tutor.net/stereo-chemistry.html",
        "lessons": [
          {
            "id": "stereo-chemistry-lesson-1",
            "title": "Finding Chirality Centers",
            "url": "https://www.youtube.com/watch?v=FjP1OiAdfaI",
            "youtubeId": "FjP1OiAdfaI"
          },
          {
            "id": "stereo-chemistry-lesson-2",
            "title": "Chiral and Achiral Molecules - Test Question",
            "url": "https://www.youtube.com/watch?v=ndFFxT-E5RM",
            "youtubeId": "ndFFxT-E5RM"
          },
          {
            "id": "stereo-chemistry-lesson-3",
            "title": "Stereochemistry - R/S Configuration and Fischer Projections",
            "url": "https://www.youtube.com/watch?v=yzfcrwJ37kI",
            "youtubeId": "yzfcrwJ37kI"
          },
          {
            "id": "stereo-chemistry-lesson-6",
            "title": "Enantiomers",
            "url": "https://www.youtube.com/watch?v=V-2OTlRH65g",
            "youtubeId": "V-2OTlRH65g"
          },
          {
            "id": "stereo-chemistry-lesson-7",
            "title": "Diastereomers",
            "url": "https://www.youtube.com/watch?v=23-dfkwKCcg",
            "youtubeId": "23-dfkwKCcg"
          },
          {
            "id": "stereo-chemistry-lesson-8",
            "title": "Meso Compounds",
            "url": "https://www.youtube.com/watch?v=cK5lbHf1Rlg",
            "youtubeId": "cK5lbHf1Rlg"
          },
          {
            "id": "stereo-chemistry-lesson-9",
            "title": "Stereoisomers",
            "url": "https://www.youtube.com/watch?v=gi55pE68dh4",
            "youtubeId": "gi55pE68dh4"
          },
          {
            "id": "stereo-chemistry-lesson-10",
            "title": "Specific Rotation, Optical Activity, & Enantiomeric Excess",
            "url": "https://www.youtube.com/watch?v=duGxp_XZzvw",
            "youtubeId": "duGxp_XZzvw"
          }
        ]
      },
      {
        "id": "chemical-reactivity",
        "title": "Chemical Reactivity",
        "url": "https://www.video-tutor.net/chemical-reactivity.html",
        "lessons": [
          {
            "id": "chemical-reactivity-lesson-1",
            "title": "Homolytic and Heterolytic Bond Cleavage",
            "url": "https://www.youtube.com/watch?v=2X6R-5RQlCU",
            "youtubeId": "2X6R-5RQlCU"
          },
          {
            "id": "chemical-reactivity-lesson-2",
            "title": "Potential Energy Diagrams - Endothermic and Exothermic Reactions",
            "url": "https://www.youtube.com/watch?v=HeKOb3efJmE",
            "youtubeId": "HeKOb3efJmE"
          },
          {
            "id": "chemical-reactivity-lesson-3",
            "title": "Bond Dissociation Energy",
            "url": "https://www.youtube.com/watch?v=0Tm6JMeYX5g",
            "youtubeId": "0Tm6JMeYX5g"
          },
          {
            "id": "chemical-reactivity-lesson-4",
            "title": "Gibbs Free Energy, Entropy, and Enthalpy Formulas",
            "url": "https://www.youtube.com/watch?v=bp389WSTplY",
            "youtubeId": "bp389WSTplY"
          },
          {
            "id": "chemical-reactivity-lesson-5",
            "title": "Chemical Kinetics - Elementary Rate Laws",
            "url": "https://www.youtube.com/watch?v=S84Llf1vqiM",
            "youtubeId": "S84Llf1vqiM"
          },
          {
            "id": "chemical-reactivity-lesson-6",
            "title": "Reaction Mechanisms - Overview",
            "url": "https://www.youtube.com/watch?v=Efh5GkVbhEc",
            "youtubeId": "Efh5GkVbhEc"
          }
        ]
      },
      {
        "id": "sn2-sn1-e1-e2-reaction-mechanisms",
        "title": "SN2, SN1, E1, E2 Mechanism",
        "url": "https://www.video-tutor.net/sn2-sn1-e1-e2-reaction-mechanisms.html",
        "lessons": [
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-1",
            "title": "SN2 SN1 E1 E2 Reaction Mechanisms - Overview",
            "url": "https://www.youtube.com/watch?v=hz-fSXifP9w",
            "youtubeId": "hz-fSXifP9w"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-3",
            "title": "Rate Law Expressions - SN2 SN1 E1 E2 Reactions",
            "url": "https://www.youtube.com/watch?v=7SPv_7boGjU",
            "youtubeId": "7SPv_7boGjU"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-4",
            "title": "The SN2 Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=k_spZVJtzFE",
            "youtubeId": "k_spZVJtzFE"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-6",
            "title": "Nucleophilic Strength",
            "url": "https://www.youtube.com/watch?v=FSUNt6rDKeg",
            "youtubeId": "FSUNt6rDKeg"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-7",
            "title": "SN2 Double Inversion - Test Question",
            "url": "https://www.youtube.com/watch?v=Ci8f9FjEbqQ",
            "youtubeId": "Ci8f9FjEbqQ"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-8",
            "title": "Crown Ethers with the SN2 Reaction",
            "url": "https://www.youtube.com/watch?v=Rzr2Ev7fevQ",
            "youtubeId": "Rzr2Ev7fevQ"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-9",
            "title": "SN2 Intramolecular Reactions",
            "url": "https://www.youtube.com/watch?v=pxz5DAqWBGc",
            "youtubeId": "pxz5DAqWBGc"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-10",
            "title": "The SN1 Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=rRAKyR7hX-U",
            "youtubeId": "rRAKyR7hX-U"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-12",
            "title": "Carbocation Stability - Hyperconjugation & Inductive Effect",
            "url": "https://www.youtube.com/watch?v=5BSQG2sbrQw",
            "youtubeId": "5BSQG2sbrQw"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-13",
            "title": "Carbanion Stability",
            "url": "https://www.youtube.com/watch?v=B2Ntf951Ztg",
            "youtubeId": "B2Ntf951Ztg"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-14",
            "title": "Intimate Ion Pair - Racemic Mixtures - SN1 Reaction",
            "url": "https://www.youtube.com/watch?v=5EJ5-uZufZ8",
            "youtubeId": "5EJ5-uZufZ8"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-15",
            "title": "Solvolysis Reactions with Stereochemistry - SN1",
            "url": "https://www.youtube.com/watch?v=syPh0qOBdK0",
            "youtubeId": "syPh0qOBdK0"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-16",
            "title": "SN1 Carbocation Rearrangements - Hydride and Methyl Shift",
            "url": "https://www.youtube.com/watch?v=SZRVcTm47xI",
            "youtubeId": "SZRVcTm47xI"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-17",
            "title": "SN1 Carbocation Rearrangements - Ring Expansion",
            "url": "https://www.youtube.com/watch?v=2mMPhvs1me4",
            "youtubeId": "2mMPhvs1me4"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-18",
            "title": "Unusual SN1 Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=PhuKduSOrmQ",
            "youtubeId": "PhuKduSOrmQ"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-19",
            "title": "Polar Protic Solvents and Polar Aprotic Solvents",
            "url": "https://www.youtube.com/watch?v=w7yVVLSQ9CU",
            "youtubeId": "w7yVVLSQ9CU"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-20",
            "title": "Leaving Group Stability",
            "url": "https://www.youtube.com/watch?v=jiAvaUcU-XI",
            "youtubeId": "jiAvaUcU-XI"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-21",
            "title": "Allylic and Benzylic Halides",
            "url": "https://www.youtube.com/watch?v=QlFvbMiG-98",
            "youtubeId": "QlFvbMiG-98"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-22",
            "title": "Aryl Halides and Vinylic Halides",
            "url": "https://www.youtube.com/watch?v=nn8IN1ugYm4",
            "youtubeId": "nn8IN1ugYm4"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-23",
            "title": "E1 Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=M1ZIXVN7GyE",
            "youtubeId": "M1ZIXVN7GyE"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-24",
            "title": "E2 Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=_pp9fxe22yc",
            "youtubeId": "_pp9fxe22yc"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-25",
            "title": "Concerted Reaction Mechanisms - SN2 and E2",
            "url": "https://www.youtube.com/watch?v=pIRTEPf6RDA",
            "youtubeId": "pIRTEPf6RDA"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-26",
            "title": "E2 Stereochemistry with Newman Projections",
            "url": "https://www.youtube.com/watch?v=_H7ANeZ4iL8",
            "youtubeId": "_H7ANeZ4iL8"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-27",
            "title": "E2 Reaction Test Question",
            "url": "https://www.youtube.com/watch?v=bTS-mINzs2U",
            "youtubeId": "bTS-mINzs2U"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-28",
            "title": "Potential Energy Diagrams - SN2 SN1 E1 E2",
            "url": "https://www.youtube.com/watch?v=QiLc8lIV1EU",
            "youtubeId": "QiLc8lIV1EU"
          },
          {
            "id": "sn2-sn1-e1-e2-reaction-mechanisms-lesson-29",
            "title": "SN2 SN1 E1 E2 Reaction Mechanisms - Practice Test",
            "url": "https://www.youtube.com/watch?v=qTc2uud7TVU",
            "youtubeId": "qTc2uud7TVU"
          }
        ]
      },
      {
        "id": "alkene-addition-reactions",
        "title": "Alkene Addition Reactions",
        "url": "https://www.video-tutor.net/alkene-addition-reactions.html",
        "lessons": [
          {
            "id": "alkene-addition-reactions-lesson-1",
            "title": "Naming Alkenes using the E/Z System",
            "url": "https://www.youtube.com/watch?v=frtnEDTSzi8",
            "youtubeId": "frtnEDTSzi8"
          },
          {
            "id": "alkene-addition-reactions-lesson-2",
            "title": "Index of Hydrogen Deficiency - Degree of Unsaturation",
            "url": "https://www.youtube.com/watch?v=M7xm5CKIHEc",
            "youtubeId": "M7xm5CKIHEc"
          },
          {
            "id": "alkene-addition-reactions-lesson-3",
            "title": "Hydrohalogenation of Alkenes",
            "url": "https://www.youtube.com/watch?v=ERGB9dNi7-0",
            "youtubeId": "ERGB9dNi7-0"
          },
          {
            "id": "alkene-addition-reactions-lesson-4",
            "title": "Markovnikov's Rule",
            "url": "https://www.youtube.com/watch?v=6O-xSRC5Wg8",
            "youtubeId": "6O-xSRC5Wg8"
          },
          {
            "id": "alkene-addition-reactions-lesson-5",
            "title": "Alkene + HBr + ROOR - Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=ZMcCvD5dDMU",
            "youtubeId": "ZMcCvD5dDMU"
          },
          {
            "id": "alkene-addition-reactions-lesson-6",
            "title": "Hydration of Alkenes",
            "url": "https://www.youtube.com/watch?v=XqCPXIvMvB4",
            "youtubeId": "XqCPXIvMvB4"
          },
          {
            "id": "alkene-addition-reactions-lesson-7",
            "title": "Alkene + H2SO4 + H2O",
            "url": "https://www.youtube.com/watch?v=unI8JN7YkMQ",
            "youtubeId": "unI8JN7YkMQ"
          },
          {
            "id": "alkene-addition-reactions-lesson-8",
            "title": "Oxymercuration Demercuration Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=kFuiht4BvOs",
            "youtubeId": "kFuiht4BvOs"
          },
          {
            "id": "alkene-addition-reactions-lesson-9",
            "title": "Alkoxymercuration Demercuration Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=GwN7R0DWnDE",
            "youtubeId": "GwN7R0DWnDE"
          },
          {
            "id": "alkene-addition-reactions-lesson-10",
            "title": "Hydroboration Oxidation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=RBwOfhS6mBM",
            "youtubeId": "RBwOfhS6mBM"
          },
          {
            "id": "alkene-addition-reactions-lesson-11",
            "title": "Halogenation of Alkenes and Halohydrin Formation",
            "url": "https://www.youtube.com/watch?v=ZfOcYntQmlk",
            "youtubeId": "ZfOcYntQmlk"
          },
          {
            "id": "alkene-addition-reactions-lesson-12",
            "title": "Alkene + Br2 + H2O",
            "url": "https://www.youtube.com/watch?v=KhfAPjl6yh4",
            "youtubeId": "KhfAPjl6yh4"
          },
          {
            "id": "alkene-addition-reactions-lesson-13",
            "title": "Epoxidation of Alkenes",
            "url": "https://www.youtube.com/watch?v=Og_caj1nOAc",
            "youtubeId": "Og_caj1nOAc"
          },
          {
            "id": "alkene-addition-reactions-lesson-14",
            "title": "Alkene + KMnO4",
            "url": "https://www.youtube.com/watch?v=lsIB1-tgNIg",
            "youtubeId": "lsIB1-tgNIg"
          },
          {
            "id": "alkene-addition-reactions-lesson-15",
            "title": "Ozonolysis - Oxidative Cleavage of Alkenes",
            "url": "https://www.youtube.com/watch?v=ID79wLZLzbA",
            "youtubeId": "ID79wLZLzbA"
          },
          {
            "id": "alkene-addition-reactions-lesson-16",
            "title": "Alkene Reactions",
            "url": "https://www.youtube.com/watch?v=lKROX1C0JRs",
            "youtubeId": "lKROX1C0JRs"
          }
        ]
      },
      {
        "id": "reactions-of-alkynes",
        "title": "Alkyne Reactions",
        "url": "https://www.video-tutor.net/reactions-of-alkynes.html",
        "lessons": [
          {
            "id": "reactions-of-alkynes-lesson-1",
            "title": "IUPAC Nomenclature with Alkynes",
            "url": "https://www.youtube.com/watch?v=ouDS2tZU94g",
            "youtubeId": "ouDS2tZU94g"
          },
          {
            "id": "reactions-of-alkynes-lesson-2",
            "title": "Reactions of Alkynes",
            "url": "https://www.youtube.com/watch?v=p6TLF92lyuI",
            "youtubeId": "p6TLF92lyuI"
          },
          {
            "id": "reactions-of-alkynes-lesson-4",
            "title": "Alkyne Synthesis Reaction Problem",
            "url": "https://www.youtube.com/watch?v=1hgcszs5pX4",
            "youtubeId": "1hgcszs5pX4"
          }
        ]
      },
      {
        "id": "organic-chemistry-1-exam-2",
        "title": "85 Test Questions",
        "url": "https://www.video-tutor.net/organic-chemistry-1-exam-2.html",
        "lessons": [
          {
            "id": "organic-chemistry-1-exam-2-lesson-1",
            "title": "Exam 2 Study Guide Review",
            "url": "https://www.youtube.com/watch?v=h_6qYq3_ftA",
            "youtubeId": "h_6qYq3_ftA"
          },
          {
            "id": "organic-chemistry-1-exam-2-lesson-3",
            "title": "10 Test Questions",
            "url": "https://www.youtube.com/watch?v=Lenac3a1zQM",
            "youtubeId": "Lenac3a1zQM"
          }
        ]
      },
      {
        "id": "reactions-of-alcohols",
        "title": "Reactions of Alcohols",
        "url": "https://www.video-tutor.net/reactions-of-alcohols.html",
        "lessons": [
          {
            "id": "reactions-of-alcohols-lesson-1",
            "title": "Alcohol Reactions with HBr, PBr3, and SOCl2",
            "url": "https://www.youtube.com/watch?v=4PDs3ygNsv4",
            "youtubeId": "4PDs3ygNsv4"
          },
          {
            "id": "reactions-of-alcohols-lesson-2",
            "title": "Alcohol Reactions with HBr, PBr3, and SOCl2",
            "url": "https://www.youtube.com/watch?v=4PDs3ygNsv4",
            "youtubeId": "4PDs3ygNsv4"
          },
          {
            "id": "reactions-of-alcohols-lesson-3",
            "title": "Oxidation of Alcohols",
            "url": "https://www.youtube.com/watch?v=K07VceUan0k",
            "youtubeId": "K07VceUan0k"
          },
          {
            "id": "reactions-of-alcohols-lesson-4",
            "title": "Alcohol Dehydration Reaction Mechanism with H2SO4",
            "url": "https://www.youtube.com/watch?v=EnviDtnyyug",
            "youtubeId": "EnviDtnyyug"
          },
          {
            "id": "reactions-of-alcohols-lesson-5",
            "title": "Synthesis of Alcohols Using NaBH4 and LiAlH4",
            "url": "https://www.youtube.com/watch?v=Pp0LeL0SkRg",
            "youtubeId": "Pp0LeL0SkRg"
          }
        ]
      },
      {
        "id": "reactions-of-free-radicals",
        "title": "Free Radical Reactions",
        "url": "https://www.video-tutor.net/reactions-of-free-radicals.html",
        "lessons": [
          {
            "id": "reactions-of-free-radicals-lesson-1",
            "title": "Free Radical Reactions",
            "url": "https://www.youtube.com/watch?v=w9RAULFkqKQ",
            "youtubeId": "w9RAULFkqKQ"
          },
          {
            "id": "reactions-of-free-radicals-lesson-3",
            "title": "Free Radical Addition Reaction of Alkenes",
            "url": "https://www.youtube.com/watch?v=ZMcCvD5dDMU",
            "youtubeId": "ZMcCvD5dDMU"
          }
        ]
      },
      {
        "id": "organic-chemistry-final-exam-review",
        "title": "100 Test Questions",
        "url": "https://www.video-tutor.net/organic-chemistry-final-exam-review.html",
        "lessons": [
          {
            "id": "organic-chemistry-final-exam-review-lesson-1",
            "title": "30 Test Questions",
            "url": "https://www.youtube.com/watch?v=ej2pSWw6U3w",
            "youtubeId": "ej2pSWw6U3w"
          }
        ]
      },
      {
        "id": "ms-ir-spectroscopy",
        "title": "MS and IR Spectroscopy",
        "url": "https://www.video-tutor.net/ms-ir-spectroscopy.html",
        "lessons": [
          {
            "id": "ms-ir-spectroscopy-lesson-1",
            "title": "IR Spectroscopy - Basic Introduction",
            "url": "https://www.youtube.com/watch?v=WTmj_9VT5oE",
            "youtubeId": "WTmj_9VT5oE"
          },
          {
            "id": "ms-ir-spectroscopy-lesson-2",
            "title": "IR Spectroscopy - Practice Problems",
            "url": "https://www.youtube.com/watch?v=SzVxYTp3pZY",
            "youtubeId": "SzVxYTp3pZY"
          },
          {
            "id": "ms-ir-spectroscopy-lesson-3",
            "title": "Mass Spectrometry",
            "url": "https://www.youtube.com/watch?v=VUIPYnWLSDE",
            "youtubeId": "VUIPYnWLSDE"
          }
        ]
      },
      {
        "id": "nmr-spectroscopy",
        "title": "NMR Spectroscopy",
        "url": "https://www.video-tutor.net/nmr-spectroscopy.html",
        "lessons": [
          {
            "id": "nmr-spectroscopy-lesson-1",
            "title": "NMR Spectroscopy - Basic Introduction",
            "url": "https://www.youtube.com/watch?v=CH-4TtZSvY0",
            "youtubeId": "CH-4TtZSvY0"
          },
          {
            "id": "nmr-spectroscopy-lesson-2",
            "title": "Shielding and Deshielding",
            "url": "https://www.youtube.com/watch?v=YjBfpxMPneE",
            "youtubeId": "YjBfpxMPneE"
          },
          {
            "id": "nmr-spectroscopy-lesson-3",
            "title": "How to Determine the Number of Signals in a H-NMR Spectrum",
            "url": "https://www.youtube.com/watch?v=q-EwIjyHiQQ",
            "youtubeId": "q-EwIjyHiQQ"
          },
          {
            "id": "nmr-spectroscopy-lesson-4",
            "title": "Chemical Shift in NMR Spectroscopy",
            "url": "https://www.youtube.com/watch?v=2QBDNxiGsAY",
            "youtubeId": "2QBDNxiGsAY"
          },
          {
            "id": "nmr-spectroscopy-lesson-5",
            "title": "Diamagnetic Anisotropy",
            "url": "https://www.youtube.com/watch?v=w8ew5bvdrqg",
            "youtubeId": "w8ew5bvdrqg"
          },
          {
            "id": "nmr-spectroscopy-lesson-6",
            "title": "Integration of H-NMR Signals",
            "url": "https://www.youtube.com/watch?v=GRCRgTXSgdM",
            "youtubeId": "GRCRgTXSgdM"
          },
          {
            "id": "nmr-spectroscopy-lesson-7",
            "title": "Spin-Spin Splitting - Multiplicity and the N+1 Rule",
            "url": "https://www.youtube.com/watch?v=WJKfl3w52Mk",
            "youtubeId": "WJKfl3w52Mk"
          },
          {
            "id": "nmr-spectroscopy-lesson-8",
            "title": "How to Draw the Proton NMR Spectrum",
            "url": "https://www.youtube.com/watch?v=vFPIM7-T6R8",
            "youtubeId": "vFPIM7-T6R8"
          },
          {
            "id": "nmr-spectroscopy-lesson-9",
            "title": "How to Draw the Lewis Structure Given the NMR Spectrum",
            "url": "https://www.youtube.com/watch?v=vejKDb1dBn8",
            "youtubeId": "vejKDb1dBn8"
          },
          {
            "id": "nmr-spectroscopy-lesson-11",
            "title": "Carbon-13 NMR Spectroscopy",
            "url": "https://www.youtube.com/watch?v=QUVTATcXE9Y",
            "youtubeId": "QUVTATcXE9Y"
          }
        ]
      },
      {
        "id": "ethers-and-epoxides",
        "title": "Ethers and Epoxides",
        "url": "https://www.video-tutor.net/ethers-and-epoxides.html",
        "lessons": [
          {
            "id": "ethers-and-epoxides-lesson-1",
            "title": "Williamson Ether Synthesis Reactions",
            "url": "https://www.youtube.com/watch?v=mNOYdafN5TI",
            "youtubeId": "mNOYdafN5TI"
          },
          {
            "id": "ethers-and-epoxides-lesson-2",
            "title": "Ether and Epoxide Reactions",
            "url": "https://www.youtube.com/watch?v=BxRLJhHjqMc",
            "youtubeId": "BxRLJhHjqMc"
          },
          {
            "id": "ethers-and-epoxides-lesson-4",
            "title": "Epoxidation of Alkenes",
            "url": "https://www.youtube.com/watch?v=Og_caj1nOAc",
            "youtubeId": "Og_caj1nOAc"
          },
          {
            "id": "ethers-and-epoxides-lesson-5",
            "title": "Epoxidation of Alkenes Problem",
            "url": "https://www.youtube.com/watch?v=UVcHG8Y7nwU",
            "youtubeId": "UVcHG8Y7nwU"
          },
          {
            "id": "ethers-and-epoxides-lesson-6",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "conjugated-pi-systems",
        "title": "Conjugated Pi Systems",
        "url": "https://www.video-tutor.net/conjugated-pi-systems.html",
        "lessons": [
          {
            "id": "conjugated-pi-systems-lesson-1",
            "title": "Reactions of Dienes - Kinetic vs Thermodynamic Product",
            "url": "https://www.youtube.com/watch?v=AAI6pWkyxO8",
            "youtubeId": "AAI6pWkyxO8"
          },
          {
            "id": "conjugated-pi-systems-lesson-3",
            "title": "Diels Alder Reaction",
            "url": "https://www.youtube.com/watch?v=sBmoP6KwK-8",
            "youtubeId": "sBmoP6KwK-8"
          },
          {
            "id": "conjugated-pi-systems-lesson-5",
            "title": "Aromaticity and Huckel's Rule",
            "url": "https://www.youtube.com/watch?v=ab4WFo0Eq-k",
            "youtubeId": "ab4WFo0Eq-k"
          },
          {
            "id": "conjugated-pi-systems-lesson-7",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "carboxylic-acid-derivatives",
        "title": "Carboxylic Acid Derivatives",
        "url": "https://www.video-tutor.net/carboxylic-acid-derivatives.html",
        "lessons": [
          {
            "id": "carboxylic-acid-derivatives-lesson-1",
            "title": "Naming Carboxylic Acids",
            "url": "https://www.youtube.com/watch?v=HU15UQtnfHc",
            "youtubeId": "HU15UQtnfHc"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-2",
            "title": "Naming Esters",
            "url": "https://www.youtube.com/watch?v=VoMTNpcKx30",
            "youtubeId": "VoMTNpcKx30"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-3",
            "title": "Naming Acid Anhydrides and Nitriles",
            "url": "https://www.youtube.com/watch?v=2GyyrMyDJkk",
            "youtubeId": "2GyyrMyDJkk"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-4",
            "title": "Naming Acid Chlorides",
            "url": "https://www.youtube.com/watch?v=-YpAzRyHLkM",
            "youtubeId": "-YpAzRyHLkM"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-5",
            "title": "Naming Amides",
            "url": "https://www.youtube.com/watch?v=EzjyF2qvtLs",
            "youtubeId": "EzjyF2qvtLs"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-6",
            "title": "Carboxylic Acid Derivatives",
            "url": "https://www.youtube.com/watch?v=-T0_FuZDDaQ",
            "youtubeId": "-T0_FuZDDaQ"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-8",
            "title": "Ester Hydrolysis Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=l_WuC4vpTsY",
            "youtubeId": "l_WuC4vpTsY"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-9",
            "title": "Fischer Esterification Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=EqBfua_kQ70",
            "youtubeId": "EqBfua_kQ70"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-10",
            "title": "Nucleophilic Acyl Substitution Reactions",
            "url": "https://www.youtube.com/watch?v=5PK63QjP03k",
            "youtubeId": "5PK63QjP03k"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-11",
            "title": "The Gabriel Synthesis Reaction",
            "url": "https://www.youtube.com/watch?v=OjIahxTJ40E",
            "youtubeId": "OjIahxTJ40E"
          },
          {
            "id": "carboxylic-acid-derivatives-lesson-12",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "aldehydes-and-ketones",
        "title": "Aldehydes and Ketones",
        "url": "https://www.video-tutor.net/aldehydes-and-ketones.html",
        "lessons": [
          {
            "id": "aldehydes-and-ketones-lesson-1",
            "title": "Naming Aldehydes",
            "url": "https://www.youtube.com/watch?v=YZcOlQglYyA",
            "youtubeId": "YZcOlQglYyA"
          },
          {
            "id": "aldehydes-and-ketones-lesson-2",
            "title": "Naming Ketones",
            "url": "https://www.youtube.com/watch?v=MQUzPunIZdg",
            "youtubeId": "MQUzPunIZdg"
          },
          {
            "id": "aldehydes-and-ketones-lesson-3",
            "title": "NaBH4 and LiAlH4 Reduction of Carbonyl Compounds",
            "url": "https://www.youtube.com/watch?v=Pp0LeL0SkRg",
            "youtubeId": "Pp0LeL0SkRg"
          },
          {
            "id": "aldehydes-and-ketones-lesson-4",
            "title": "Aldehydes and Ketones",
            "url": "https://www.youtube.com/watch?v=2seAPy1sZHE",
            "youtubeId": "2seAPy1sZHE"
          },
          {
            "id": "aldehydes-and-ketones-lesson-5",
            "title": "Wolff Kishner Reduction Mechanism",
            "url": "https://www.youtube.com/watch?v=hvIFnyOHoMQ",
            "youtubeId": "hvIFnyOHoMQ"
          },
          {
            "id": "aldehydes-and-ketones-lesson-6",
            "title": "Keto Enol Tautomerism",
            "url": "https://www.youtube.com/watch?v=Th-YjaG3kcc",
            "youtubeId": "Th-YjaG3kcc"
          },
          {
            "id": "aldehydes-and-ketones-lesson-7",
            "title": "Alpha Halogenation of Ketones",
            "url": "https://www.youtube.com/watch?v=GfQsrGLfw7E",
            "youtubeId": "GfQsrGLfw7E"
          },
          {
            "id": "aldehydes-and-ketones-lesson-8",
            "title": "Imine and Enamine Formation with Reductive Amination",
            "url": "https://www.youtube.com/watch?v=_0C7XXWjOpQ",
            "youtubeId": "_0C7XXWjOpQ"
          },
          {
            "id": "aldehydes-and-ketones-lesson-9",
            "title": "Protecting Groups - Acetals and Hemiacetals",
            "url": "https://www.youtube.com/watch?v=YYC_vbrgZDY",
            "youtubeId": "YYC_vbrgZDY"
          },
          {
            "id": "aldehydes-and-ketones-lesson-10",
            "title": "Wittig Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=jxUXIHG1zGc",
            "youtubeId": "jxUXIHG1zGc"
          },
          {
            "id": "aldehydes-and-ketones-lesson-11",
            "title": "Clemmensen Reduction Reaction",
            "url": "https://www.youtube.com/watch?v=yJsOrKly3XQ",
            "youtubeId": "yJsOrKly3XQ"
          },
          {
            "id": "aldehydes-and-ketones-lesson-12",
            "title": "Cyanohydrin Formation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=WnULTOrs2Ds",
            "youtubeId": "WnULTOrs2Ds"
          },
          {
            "id": "aldehydes-and-ketones-lesson-13",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "organometallic-compounds",
        "title": "Organometallic Compounds",
        "url": "https://www.video-tutor.net/organometallic-compounds.html",
        "lessons": [
          {
            "id": "organometallic-compounds-lesson-1",
            "title": "Grignard Reagent Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=U8ltC2Kz3Mk",
            "youtubeId": "U8ltC2Kz3Mk"
          },
          {
            "id": "organometallic-compounds-lesson-2",
            "title": "Gilman Reagent and Organocuprates",
            "url": "https://www.youtube.com/watch?v=CYF0w2dIkWE",
            "youtubeId": "CYF0w2dIkWE"
          },
          {
            "id": "organometallic-compounds-lesson-3",
            "title": "Intro to Organometallic Compounds",
            "url": "https://www.youtube.com/watch?v=3FRV31YYtL8",
            "youtubeId": "3FRV31YYtL8"
          },
          {
            "id": "organometallic-compounds-lesson-4",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "aromatic-substitution-reactions",
        "title": "Aromatic Substitution Reactions",
        "url": "https://www.video-tutor.net/aromatic-substitution-reactions.html",
        "lessons": [
          {
            "id": "aromatic-substitution-reactions-lesson-1",
            "title": "Naming Benzene Ring Derivatives",
            "url": "https://www.youtube.com/watch?v=d86lQloVCf0",
            "youtubeId": "d86lQloVCf0"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-2",
            "title": "Bromination, Chlorination, & Iodination of Benzene",
            "url": "https://www.youtube.com/watch?v=nP4-tAAGDVc",
            "youtubeId": "nP4-tAAGDVc"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-3",
            "title": "Nitration of Benzene Mechanism",
            "url": "https://www.youtube.com/watch?v=7tsHis091lM",
            "youtubeId": "7tsHis091lM"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-4",
            "title": "Sulfonation and Desulfonation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=siMLQishuoA",
            "youtubeId": "siMLQishuoA"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-5",
            "title": "Friedel Crafts Acylation",
            "url": "https://www.youtube.com/watch?v=gz6HnUfS2ow",
            "youtubeId": "gz6HnUfS2ow"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-6",
            "title": "Gatterman Koch Reaction",
            "url": "https://www.youtube.com/watch?v=Yf6rMV0Q6lI",
            "youtubeId": "Yf6rMV0Q6lI"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-7",
            "title": "Friedel Crafts Alkylation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=6ydPCBEVjXY",
            "youtubeId": "6ydPCBEVjXY"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-8",
            "title": "Benzene Side Chain Reactions",
            "url": "https://www.youtube.com/watch?v=UnL46hdLhTU",
            "youtubeId": "UnL46hdLhTU"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-9",
            "title": "Ortho Meta Para Directors - Activating and Deactivating Groups",
            "url": "https://www.youtube.com/watch?v=BDooDi7zQxo",
            "youtubeId": "BDooDi7zQxo"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-10",
            "title": "Nitration of Methylbenzoate and Bromobenzene",
            "url": "https://www.youtube.com/watch?v=eiRgQ0DLvu8",
            "youtubeId": "eiRgQ0DLvu8"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-11",
            "title": "Ortho Para Ratio - Nitration of Toluene",
            "url": "https://www.youtube.com/watch?v=K63p4fz4MEg",
            "youtubeId": "K63p4fz4MEg"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-12",
            "title": "Electrophilic Aromatic Substitution Reactions Review",
            "url": "https://www.youtube.com/watch?v=ubtvxTvdWjA",
            "youtubeId": "ubtvxTvdWjA"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-13",
            "title": "Nucleophilic Aromatic Substitution Reactions",
            "url": "https://www.youtube.com/watch?v=z0FzBv7B24Y",
            "youtubeId": "z0FzBv7B24Y"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-14",
            "title": "Arenediazonium Salts and the Sandmeyer Reactions",
            "url": "https://www.youtube.com/watch?v=kFNMB3rY9Ls",
            "youtubeId": "kFNMB3rY9Ls"
          },
          {
            "id": "aromatic-substitution-reactions-lesson-15",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "heterocyclic-compounds",
        "title": "Heterocyclic Compounds",
        "url": "https://www.video-tutor.net/heterocyclic-compounds.html",
        "lessons": [
          {
            "id": "heterocyclic-compounds-lesson-1",
            "title": "Heterocyclic Reactions",
            "url": "https://www.youtube.com/watch?v=_KCABUyyz6g",
            "youtubeId": "_KCABUyyz6g"
          },
          {
            "id": "heterocyclic-compounds-lesson-2",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "alpha-carbon-chemistry",
        "title": "Alpha Carbon Chemistry",
        "url": "https://www.video-tutor.net/alpha-carbon-chemistry.html",
        "lessons": [
          {
            "id": "alpha-carbon-chemistry-lesson-1",
            "title": "Enolate Reactions - Direct Alkylation of Ketones with LDA",
            "url": "https://www.youtube.com/watch?v=qezdGhKxJi8",
            "youtubeId": "qezdGhKxJi8"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-2",
            "title": "Aldol Reactions",
            "url": "https://www.youtube.com/watch?v=OBT3otCRBxg",
            "youtubeId": "OBT3otCRBxg"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-3",
            "title": "Cannizzaro Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=tEkOcmJR27o",
            "youtubeId": "tEkOcmJR27o"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-4",
            "title": "Michael Addition Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=dEdsR-6dKWE",
            "youtubeId": "dEdsR-6dKWE"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-5",
            "title": "Robinson Annulation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=_wio-EENoW0",
            "youtubeId": "_wio-EENoW0"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-6",
            "title": "Stork Enamine Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=YAM_LEHGHFQ",
            "youtubeId": "YAM_LEHGHFQ"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-7",
            "title": "Claisen Condensation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=LoU048BKMkk",
            "youtubeId": "LoU048BKMkk"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-8",
            "title": "Dieckmann Condensation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=TCx-Ra7VD2U",
            "youtubeId": "TCx-Ra7VD2U"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-9",
            "title": "Malonic Ester Synthesis Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=7O_kWGVdbe4",
            "youtubeId": "7O_kWGVdbe4"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-10",
            "title": "Acetoacetic Ester Synthesis Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=etAKZGYdd5s",
            "youtubeId": "etAKZGYdd5s"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-11",
            "title": "Decarboxylation Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=833x8dRlpb8",
            "youtubeId": "833x8dRlpb8"
          },
          {
            "id": "alpha-carbon-chemistry-lesson-12",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "amines",
        "title": "Amines",
        "url": "https://www.video-tutor.net/amines.html",
        "lessons": [
          {
            "id": "amines-lesson-1",
            "title": "IUPAC Nomenclature of Amines",
            "url": "https://www.youtube.com/watch?v=Y6AzMr0Fn3Y",
            "youtubeId": "Y6AzMr0Fn3Y"
          },
          {
            "id": "amines-lesson-2",
            "title": "Amine Synthesis Reactions",
            "url": "https://www.youtube.com/watch?v=NaM_1XvuyLo",
            "youtubeId": "NaM_1XvuyLo"
          },
          {
            "id": "amines-lesson-3",
            "title": "Gabriel Synthesis Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=OjIahxTJ40E",
            "youtubeId": "OjIahxTJ40E"
          },
          {
            "id": "amines-lesson-4",
            "title": "Hoffman Rearrangement and Curtius Reaction Mechanism",
            "url": "https://www.youtube.com/watch?v=oN9sfiuN35o",
            "youtubeId": "oN9sfiuN35o"
          },
          {
            "id": "amines-lesson-5",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "organic-chemistry-2-final-exam-review",
        "title": "100 Test Questions",
        "url": "https://www.video-tutor.net/organic-chemistry-2-final-exam-review.html",
        "lessons": [
          {
            "id": "organic-chemistry-2-final-exam-review-lesson-1",
            "title": "15 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
      {
        "id": "more-topics",
        "title": "Other Topics",
        "url": "https://www.video-tutor.net/more-topics.html",
        "lessons": [
          {
            "id": "more-topics-lesson-1",
            "title": "Carbohydrates",
            "url": "https://www.youtube.com/watch?v=7FR2_VjwKYk",
            "youtubeId": "7FR2_VjwKYk"
          },
          {
            "id": "more-topics-lesson-2",
            "title": "100 Test Questions",
            "url": "https://www.youtube.com/watch?v=T5NaUdVfAOc",
            "youtubeId": "T5NaUdVfAOc"
          }
        ]
      },
    ]
  },
  {
    "id": "statistics",
    "title": "Statistics",
    "url": "https://www.video-tutor.net/statistic.html",
    "chapters": [
      {
        "id": "introduction-to-statistics",
        "title": "Introduction to Statistics",
        "url": "https://www.video-tutor.net/introduction-to-statistics.html",
        "lessons": [
          {
            "id": "introduction-to-statistics-lesson-1",
            "title": "Introduction to Statistics",
            "url": "https://www.youtube.com/watch?v=XZo4xyJXCak",
            "youtubeId": "XZo4xyJXCak"
          },
          {
            "id": "introduction-to-statistics-lesson-2",
            "title": "Descriptive Statistics vs Inferential Statistics",
            "url": "https://www.youtube.com/watch?v=VHYOuWu9jQI",
            "youtubeId": "VHYOuWu9jQI"
          },
          {
            "id": "introduction-to-statistics-lesson-3",
            "title": "Quantitative vs Qualitative Data",
            "url": "https://www.youtube.com/watch?v=5rUVYWfZOb8",
            "youtubeId": "5rUVYWfZOb8"
          },
          {
            "id": "introduction-to-statistics-lesson-4",
            "title": "Statistic Vs Parameter and Population vs Sample",
            "url": "https://www.youtube.com/watch?v=Mb9BuEkbaHQ",
            "youtubeId": "Mb9BuEkbaHQ"
          },
          {
            "id": "introduction-to-statistics-lesson-5",
            "title": "Scales of Measurement",
            "url": "https://www.youtube.com/watch?v=LuBD49SFpWs",
            "youtubeId": "LuBD49SFpWs"
          },
          {
            "id": "introduction-to-statistics-lesson-7",
            "title": "Scales of Measurement - Nominal, Ordinal, Interval, & Ratio Scale Data​",
            "url": "https://www.youtube.com/watch?v=LuBD49SFpWs",
            "youtubeId": "LuBD49SFpWs"
          }
        ]
      },
      {
        "id": "graphs-and-tables",
        "title": "Graphs and Tables",
        "url": "https://www.video-tutor.net/graphs-and-tables.html",
        "lessons": [
          {
            "id": "graphs-and-tables-lesson-1",
            "title": "How to Make a Simple Frequency Table",
            "url": "https://www.youtube.com/watch?v=lyRbCwDDnJo",
            "youtubeId": "lyRbCwDDnJo"
          },
          {
            "id": "graphs-and-tables-lesson-2",
            "title": "Relative Frequency Distribution Table",
            "url": "https://www.youtube.com/watch?v=gq3FPpm2yvA",
            "youtubeId": "gq3FPpm2yvA"
          },
          {
            "id": "graphs-and-tables-lesson-3",
            "title": "Cumulative Relative Frequency Table",
            "url": "https://www.youtube.com/watch?v=6hJGa4Zp62M",
            "youtubeId": "6hJGa4Zp62M"
          },
          {
            "id": "graphs-and-tables-lesson-4",
            "title": "Dot Plots and Frequency Tables",
            "url": "https://www.youtube.com/watch?v=Iu17mY1VfZU",
            "youtubeId": "Iu17mY1VfZU"
          },
          {
            "id": "graphs-and-tables-lesson-5",
            "title": "Line Plots",
            "url": "https://www.youtube.com/watch?v=JnoBjHz2dtw",
            "youtubeId": "JnoBjHz2dtw"
          },
          {
            "id": "graphs-and-tables-lesson-6",
            "title": "Stem and Leaf Plots",
            "url": "https://www.youtube.com/watch?v=MUCvUgGfzdo",
            "youtubeId": "MUCvUgGfzdo"
          },
          {
            "id": "graphs-and-tables-lesson-7",
            "title": "Side by Side Stem and Leaf Plots",
            "url": "https://www.youtube.com/watch?v=wkAjnGmRPVo",
            "youtubeId": "wkAjnGmRPVo"
          },
          {
            "id": "graphs-and-tables-lesson-8",
            "title": "How to Make a Histogram Using a Frequency Distribution Table",
            "url": "https://www.youtube.com/watch?v=AndS0RLdxtk",
            "youtubeId": "AndS0RLdxtk"
          },
          {
            "id": "graphs-and-tables-lesson-9",
            "title": "How to Make a Frequency Polygon",
            "url": "https://www.youtube.com/watch?v=y7Wb9AjbRjo",
            "youtubeId": "y7Wb9AjbRjo"
          }
        ]
      },
      {
        "id": "central-tendency-and-variation",
        "title": "Central Tendency",
        "url": "https://www.video-tutor.net/central-tendency-and-variation.html",
        "lessons": [
          {
            "id": "central-tendency-and-variation-lesson-1",
            "title": "Statistics Formulas and Equations",
            "url": "https://www.youtube.com/watch?v=FP6qS5d3Ly4",
            "youtubeId": "FP6qS5d3Ly4"
          },
          {
            "id": "central-tendency-and-variation-lesson-2",
            "title": "Mean, Median, Mode, and Range",
            "url": "https://www.youtube.com/watch?v=A1mQ9kD-i9I",
            "youtubeId": "A1mQ9kD-i9I"
          },
          {
            "id": "central-tendency-and-variation-lesson-3",
            "title": "How to Calculate the Median Using a Formula",
            "url": "https://www.youtube.com/watch?v=xkDrB6LQFP0",
            "youtubeId": "xkDrB6LQFP0"
          },
          {
            "id": "central-tendency-and-variation-lesson-4",
            "title": "How to Calculate the Range, Midrange, and Coefficient of Range",
            "url": "https://www.youtube.com/watch?v=Ajg0Z7wXZRI",
            "youtubeId": "Ajg0Z7wXZRI"
          },
          {
            "id": "central-tendency-and-variation-lesson-5",
            "title": "How to Find the Missing Value Given the Mean",
            "url": "https://www.youtube.com/watch?v=l8KrAo089_U",
            "youtubeId": "l8KrAo089_U"
          },
          {
            "id": "central-tendency-and-variation-lesson-6",
            "title": "How to Find the Weighted Mean",
            "url": "https://www.youtube.com/watch?v=LdrBNhWw9AM",
            "youtubeId": "LdrBNhWw9AM"
          },
          {
            "id": "central-tendency-and-variation-lesson-7",
            "title": "The Mean Formulas",
            "url": "https://www.youtube.com/watch?v=6G6i8vSa8Zs",
            "youtubeId": "6G6i8vSa8Zs"
          },
          {
            "id": "central-tendency-and-variation-lesson-8",
            "title": "Formulas of Statistics in Excel",
            "url": "https://www.youtube.com/watch?v=aRR86imVsxM",
            "youtubeId": "aRR86imVsxM"
          },
          {
            "id": "central-tendency-and-variation-lesson-9",
            "title": "Sample Mean and Population Mean",
            "url": "https://www.youtube.com/watch?v=cmtBUWCC-6A",
            "youtubeId": "cmtBUWCC-6A"
          },
          {
            "id": "central-tendency-and-variation-lesson-10",
            "title": "Averages and Uncertainty Calculations",
            "url": "https://www.youtube.com/watch?v=CSJewgNUZKw",
            "youtubeId": "CSJewgNUZKw"
          },
          {
            "id": "central-tendency-and-variation-lesson-11",
            "title": "How to Calculate the Standard Deviation",
            "url": "https://www.youtube.com/watch?v=IaTFpp-uzp0",
            "youtubeId": "IaTFpp-uzp0"
          },
          {
            "id": "central-tendency-and-variation-lesson-12",
            "title": "Standard Deviation and Coefficient of Variation",
            "url": "https://www.youtube.com/watch?v=PsJ_NgDUayI",
            "youtubeId": "PsJ_NgDUayI"
          },
          {
            "id": "central-tendency-and-variation-lesson-13",
            "title": "How to Calculate Variance",
            "url": "https://www.youtube.com/watch?v=deIQeQzPK08",
            "youtubeId": "deIQeQzPK08"
          },
          {
            "id": "central-tendency-and-variation-lesson-14",
            "title": "Mean, Median, and Mode of Grouped Data",
            "url": "https://www.youtube.com/watch?v=zjHfAhcU6kE",
            "youtubeId": "zjHfAhcU6kE"
          },
          {
            "id": "central-tendency-and-variation-lesson-15",
            "title": "Standard Deviation of Grouped Data",
            "url": "https://www.youtube.com/watch?v=x6Pnf57wRAs",
            "youtubeId": "x6Pnf57wRAs"
          },
          {
            "id": "central-tendency-and-variation-lesson-16",
            "title": "How to Calculate the Median of Grouped Data",
            "url": "https://www.youtube.com/watch?v=8tPXYlvbRxA",
            "youtubeId": "8tPXYlvbRxA"
          },
          {
            "id": "central-tendency-and-variation-lesson-17",
            "title": "How to Calculate the Mode of Grouped Data",
            "url": "https://www.youtube.com/watch?v=Sqkhzdn1eOU",
            "youtubeId": "Sqkhzdn1eOU"
          },
          {
            "id": "central-tendency-and-variation-lesson-18",
            "title": "Mean Absolute Deviation",
            "url": "https://www.youtube.com/watch?v=K4heM9mSrw0",
            "youtubeId": "K4heM9mSrw0"
          },
          {
            "id": "central-tendency-and-variation-lesson-19",
            "title": "How to Calculate the Average Deviation",
            "url": "https://www.youtube.com/watch?v=VoZYDR8GFpk",
            "youtubeId": "VoZYDR8GFpk"
          }
        ]
      },
      {
        "id": "measures-of-position",
        "title": "Measures of Position",
        "url": "https://www.video-tutor.net/measures-of-position.html",
        "lessons": [
          {
            "id": "measures-of-position-lesson-1",
            "title": "Quartiles, Deciles, and Percentiles",
            "url": "https://www.youtube.com/watch?v=40o82o3uNfk",
            "youtubeId": "40o82o3uNfk"
          },
          {
            "id": "measures-of-position-lesson-2",
            "title": "How to Find the Interquartile Range",
            "url": "https://www.youtube.com/watch?v=STSP8gTSdT8",
            "youtubeId": "STSP8gTSdT8"
          },
          {
            "id": "measures-of-position-lesson-3",
            "title": "The Coefficient of Quartile Deviation",
            "url": "https://www.youtube.com/watch?v=AUrzJeIEBA4",
            "youtubeId": "AUrzJeIEBA4"
          },
          {
            "id": "measures-of-position-lesson-4",
            "title": "How to Make Box and Whisker Plots",
            "url": "https://www.youtube.com/watch?v=mhaGAaL6Abw",
            "youtubeId": "mhaGAaL6Abw"
          },
          {
            "id": "measures-of-position-lesson-5",
            "title": "Skewness with Box Plots​",
            "url": "https://www.youtube.com/watch?v=U0NZu6f5TMI",
            "youtubeId": "U0NZu6f5TMI"
          }
        ]
      },
      {
        "id": "introduction-to-probability",
        "title": "Introduction to Probability",
        "url": "https://www.video-tutor.net/introduction-to-probability.html",
        "lessons": [
          {
            "id": "introduction-to-probability-lesson-1",
            "title": "Introduction to Probability",
            "url": "https://www.youtube.com/watch?v=SkidyDQuupA",
            "youtubeId": "SkidyDQuupA"
          },
          {
            "id": "introduction-to-probability-lesson-2",
            "title": "Probability Formulas",
            "url": "https://www.youtube.com/watch?v=bddckR734aM",
            "youtubeId": "bddckR734aM"
          },
          {
            "id": "introduction-to-probability-lesson-3",
            "title": "Probability of Complementary Events",
            "url": "https://www.youtube.com/watch?v=0T-CaQCiSf4",
            "youtubeId": "0T-CaQCiSf4"
          },
          {
            "id": "introduction-to-probability-lesson-4",
            "title": "Conditional Probability with Venn Diagrams and Contingency Tables",
            "url": "https://www.youtube.com/watch?v=sqDVrXq_eh0",
            "youtubeId": "sqDVrXq_eh0"
          },
          {
            "id": "introduction-to-probability-lesson-5",
            "title": "Probability of Independent and Dependent Events",
            "url": "https://www.youtube.com/watch?v=lWAdPyvm400",
            "youtubeId": "lWAdPyvm400"
          },
          {
            "id": "introduction-to-probability-lesson-6",
            "title": "Probability of Mutually Exclusive Events with Venn Diagrams",
            "url": "https://www.youtube.com/watch?v=X6usGgwXFyU",
            "youtubeId": "X6usGgwXFyU"
          },
          {
            "id": "introduction-to-probability-lesson-7",
            "title": "Addition Rule and Multiplication Rule",
            "url": "https://www.youtube.com/watch?v=94AmzeR9n2w",
            "youtubeId": "94AmzeR9n2w"
          },
          {
            "id": "introduction-to-probability-lesson-8",
            "title": "Compound Probability of Independent Events",
            "url": "https://www.youtube.com/watch?v=EHU6pVSczb4",
            "youtubeId": "EHU6pVSczb4"
          },
          {
            "id": "introduction-to-probability-lesson-9",
            "title": "How to Calculate the Expected Value",
            "url": "https://www.youtube.com/watch?v=b6VK2VPMXNI",
            "youtubeId": "b6VK2VPMXNI"
          },
          {
            "id": "introduction-to-probability-lesson-10",
            "title": "Probability Tree Diagrams",
            "url": "https://www.youtube.com/watch?v=w4wKXVwtGac",
            "youtubeId": "w4wKXVwtGac"
          },
          {
            "id": "introduction-to-probability-lesson-11",
            "title": "Bayes Theorem of Probability with Tree Diagrams​",
            "url": "https://www.youtube.com/watch?v=OByl4RJxnKA",
            "youtubeId": "OByl4RJxnKA"
          }
        ]
      },
      {
        "id": "discrete-probability-distributions",
        "title": "Discrete Probability Distributions",
        "url": "https://www.video-tutor.net/discrete-probability-distributions.html",
        "lessons": [
          {
            "id": "discrete-probability-distributions-lesson-1",
            "title": "Probability Distribution Formulas",
            "url": "https://www.youtube.com/watch?v=KMLR_lOnVmI",
            "youtubeId": "KMLR_lOnVmI"
          },
          {
            "id": "discrete-probability-distributions-lesson-2",
            "title": "Finding the Probability of a Binomial Distribution",
            "url": "https://www.youtube.com/watch?v=3PWKQiLK41M",
            "youtubeId": "3PWKQiLK41M"
          },
          {
            "id": "discrete-probability-distributions-lesson-3",
            "title": "The Geometric Distribution",
            "url": "https://www.youtube.com/watch?v=d5iAWPnrH6w",
            "youtubeId": "d5iAWPnrH6w"
          },
          {
            "id": "discrete-probability-distributions-lesson-4",
            "title": "The Poisson Distribution",
            "url": "https://www.youtube.com/watch?v=m0o-585xwW0",
            "youtubeId": "m0o-585xwW0"
          },
          {
            "id": "discrete-probability-distributions-lesson-5",
            "title": "Continuous vs Discrete Data",
            "url": "https://www.youtube.com/watch?v=cz4nPSA9rlc",
            "youtubeId": "cz4nPSA9rlc"
          }
        ]
      },
      {
        "id": "continuous-probability-distributions",
        "title": "Continuous Distributions",
        "url": "https://www.video-tutor.net/continuous-probability-distributions.html",
        "lessons": [
          {
            "id": "continuous-probability-distributions-lesson-1",
            "title": "Continuous Probability Distributions",
            "url": "https://www.youtube.com/watch?v=QxqxdQ_g2uw",
            "youtubeId": "QxqxdQ_g2uw"
          },
          {
            "id": "continuous-probability-distributions-lesson-2",
            "title": "Cumulative Distribution Functions and Probability Density Functions",
            "url": "https://www.youtube.com/watch?v=3xAIWiTJCvE",
            "youtubeId": "3xAIWiTJCvE"
          },
          {
            "id": "continuous-probability-distributions-lesson-3",
            "title": "Probability of a Uniform Distribution",
            "url": "https://www.youtube.com/watch?v=KfunVw-0AH0",
            "youtubeId": "KfunVw-0AH0"
          },
          {
            "id": "continuous-probability-distributions-lesson-4",
            "title": "Probability of an Exponential Distribution",
            "url": "https://www.youtube.com/watch?v=J3KSjZFVbis",
            "youtubeId": "J3KSjZFVbis"
          }
        ]
      },
      {
        "id": "normal-probability-distributions",
        "title": "Normal Probability Distributions",
        "url": "https://www.video-tutor.net/normal-probability-distributions.html",
        "lessons": [
          {
            "id": "normal-probability-distributions-lesson-1",
            "title": "Standard Normal Distributions",
            "url": "https://www.youtube.com/watch?v=CjF_yQ2N638",
            "youtubeId": "CjF_yQ2N638"
          },
          {
            "id": "normal-probability-distributions-lesson-2",
            "title": "Standard Normal Distribution with Calculus",
            "url": "https://www.youtube.com/watch?v=gHBL5Zau3NE",
            "youtubeId": "gHBL5Zau3NE"
          },
          {
            "id": "normal-probability-distributions-lesson-3",
            "title": "Law of Large Numbers",
            "url": "https://www.youtube.com/watch?v=ihTpK6dXSas",
            "youtubeId": "ihTpK6dXSas"
          },
          {
            "id": "normal-probability-distributions-lesson-4",
            "title": "The Central Limit Theorem",
            "url": "https://www.youtube.com/watch?v=4YLtvNeRIrg",
            "youtubeId": "4YLtvNeRIrg"
          },
          {
            "id": "normal-probability-distributions-lesson-5",
            "title": "The Standard Error of the Mean",
            "url": "https://www.youtube.com/watch?v=UuHqq09nTAk",
            "youtubeId": "UuHqq09nTAk"
          }
        ]
      },
      {
        "id": "confidence-intervals",
        "title": "Confidence Intervals",
        "url": "https://www.video-tutor.net/confidence-intervals.html",
        "lessons": [
          {
            "id": "confidence-intervals-lesson-1",
            "title": "Z-Scores, Confidence Intervals, and Margin of Error",
            "url": "https://www.youtube.com/watch?v=DT-fPG0Hff8",
            "youtubeId": "DT-fPG0Hff8"
          },
          {
            "id": "confidence-intervals-lesson-2",
            "title": "How to Find the Z-score Given the Confidence Intervals",
            "url": "https://www.youtube.com/watch?v=sJyZ9vRhP7o",
            "youtubeId": "sJyZ9vRhP7o"
          },
          {
            "id": "confidence-intervals-lesson-3",
            "title": "How to Calculate the Sample Size",
            "url": "https://www.youtube.com/watch?v=nkkxu09K3ZA",
            "youtubeId": "nkkxu09K3ZA"
          },
          {
            "id": "confidence-intervals-lesson-4",
            "title": "Student's T-Distribution",
            "url": "https://www.youtube.com/watch?v=MUD390jtgQs",
            "youtubeId": "MUD390jtgQs"
          },
          {
            "id": "confidence-intervals-lesson-5",
            "title": "Finding a Confidence Interval of a Population Proportion",
            "url": "https://www.youtube.com/watch?v=_aQTgv_OOSU",
            "youtubeId": "_aQTgv_OOSU"
          },
          {
            "id": "confidence-intervals-lesson-6",
            "title": "Chebyshev's Theorem",
            "url": "https://www.youtube.com/watch?v=ZXq0ygaZuwg",
            "youtubeId": "ZXq0ygaZuwg"
          }
        ]
      },
      {
        "id": "hypothesis-testing-with-one-sample",
        "title": "Hypothesis Testing - 1 Sample",
        "url": "https://www.video-tutor.net/hypothesis-testing-with-one-sample.html",
        "lessons": [
          {
            "id": "hypothesis-testing-with-one-sample-lesson-1",
            "title": "Hypothesis Testing - Null and Alternative Hypotheses",
            "url": "https://www.youtube.com/watch?v=wiYJWyfdGg4",
            "youtubeId": "wiYJWyfdGg4"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-2",
            "title": "How to Identify Type I and Type II Errors",
            "url": "https://www.youtube.com/watch?v=9yQm9F2_yIk",
            "youtubeId": "9yQm9F2_yIk"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-3",
            "title": "One Tailed and Two Tailed Tests",
            "url": "https://www.youtube.com/watch?v=XHPIEp-3yC0",
            "youtubeId": "XHPIEp-3yC0"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-4",
            "title": "Test Statistic for Means and Population Proportions",
            "url": "https://www.youtube.com/watch?v=Hag0GW9B6EY",
            "youtubeId": "Hag0GW9B6EY"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-5",
            "title": "Hypothesis Testing Problems - Z Test and T Statistics",
            "url": "https://www.youtube.com/watch?v=zJ8e_wAWUzE",
            "youtubeId": "zJ8e_wAWUzE"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-6",
            "title": "P-Value Method for Hypothesis Testing",
            "url": "https://www.youtube.com/watch?v=8Aw45HN5lnA",
            "youtubeId": "8Aw45HN5lnA"
          },
          {
            "id": "hypothesis-testing-with-one-sample-lesson-7",
            "title": "Hypothesis Testing - Solving Problems with Proportions",
            "url": "https://www.youtube.com/watch?v=76VruarGn2Q",
            "youtubeId": "76VruarGn2Q"
          }
        ]
      },
      {
        "id": "hypothesis-testing-with-two-samples",
        "title": "Hypothesis Testing - 2 Samples",
        "url": "https://www.video-tutor.net/hypothesis-testing-with-two-samples.html",
        "lessons": [
          {
            "id": "hypothesis-testing-with-two-samples-lesson-1",
            "title": "Hypothesis Testing - Difference of Two Means",
            "url": "https://www.youtube.com/watch?v=UcZwyzwWU7o",
            "youtubeId": "UcZwyzwWU7o"
          },
          {
            "id": "hypothesis-testing-with-two-samples-lesson-2",
            "title": "How to Find Cohen's D to Determine",
            "url": "https://www.youtube.com/watch?v=GDe4M0xEghs",
            "youtubeId": "GDe4M0xEghs"
          },
          {
            "id": "hypothesis-testing-with-two-samples-lesson-3",
            "title": "Hypothesis Testing with Two Proportions",
            "url": "https://www.youtube.com/watch?v=pCbNUnZ98oE",
            "youtubeId": "pCbNUnZ98oE"
          },
          {
            "id": "hypothesis-testing-with-two-samples-lesson-4",
            "title": "Matched or Paired Samples",
            "url": "https://www.youtube.com/watch?v=JiQR0lHLe74",
            "youtubeId": "JiQR0lHLe74"
          }
        ]
      },
      {
        "id": "chi-square-distributions",
        "title": "The Chi-Square Distribution",
        "url": "https://www.video-tutor.net/chi-square-distributions.html",
        "lessons": [
          {
            "id": "chi-square-distributions-lesson-1",
            "title": "The Chi Square Test",
            "url": "https://www.youtube.com/watch?v=HKDqlYSLt68",
            "youtubeId": "HKDqlYSLt68"
          },
          {
            "id": "chi-square-distributions-lesson-2",
            "title": "The Chi Square Distribution Test of a Single Standard Deviation",
            "url": "https://www.youtube.com/watch?v=O6a76Dnn104",
            "youtubeId": "O6a76Dnn104"
          },
          {
            "id": "chi-square-distributions-lesson-3",
            "title": "Tests of Independence Using Chi-Square Distribution",
            "url": "https://www.youtube.com/watch?v=y5nxiL6civU",
            "youtubeId": "y5nxiL6civU"
          }
        ]
      },
      {
        "id": "linear-regression",
        "title": "Regression & Correlation",
        "url": "https://www.video-tutor.net/linear-regression.html",
        "lessons": [
          {
            "id": "linear-regression-lesson-1",
            "title": "The Least Squares Method",
            "url": "https://www.youtube.com/watch?v=P8hT5nDai6A",
            "youtubeId": "P8hT5nDai6A"
          },
          {
            "id": "linear-regression-lesson-2",
            "title": "Correlation Coefficient",
            "url": "https://www.youtube.com/watch?v=11c9cs6WpJU",
            "youtubeId": "11c9cs6WpJU"
          },
          {
            "id": "linear-regression-lesson-3",
            "title": "How to Calculate the Covariance",
            "url": "https://www.youtube.com/watch?v=rb2nU7YZV_I",
            "youtubeId": "rb2nU7YZV_I"
          },
          {
            "id": "linear-regression-lesson-4",
            "title": "Calculating the Correlation Coefficient Using the Covariance Formula",
            "url": "https://www.youtube.com/watch?v=5wIiOFnXSYs",
            "youtubeId": "5wIiOFnXSYs"
          }
        ]
      },
    ]
  },
];
