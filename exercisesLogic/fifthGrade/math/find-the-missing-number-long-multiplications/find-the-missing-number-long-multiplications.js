const uuidv4 = require("uuid/v4");
const fs = require("fs");

const logic = {
  underscore: "\\textcolor{#1E88E5}{\\_}",
  Advanced() {
    const x = [6, 7, 8, 9];
    const y = [1];
    const z = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const questions = [];

    // x y z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              z[k]
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              z[k]
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${y[j]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    //***

    // y z x
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              x[i]
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              x[i]
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${z[k]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    //***

    // z x y
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              y[j]
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              y[j]
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${x[i]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    //***

    // y x z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              z[k]
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              z[k]
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${x[i]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    //***

    // x z y

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              y[j]
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              y[j]
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${z[k]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    //***

    // z y x

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              x[i]
            } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              x[i]
            } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${y[j]} \\times ${
              this.underscore
            } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1800
          });
        }
      }
    }

    return questions;
  },
  Intermediate() {
    const x = [4, 5];
    const y = [1, 2];
    const z = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const questions = [];

    // x y z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              z[k]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              z[k]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${y[j]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    //***

    // y z x
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              x[i]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              x[i]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${z[k]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    //***

    // z x y
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              y[j]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              y[j]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${x[i]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    //***

    // y x z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              z[k]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              z[k]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${x[i]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    //***

    // x z y

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              y[j]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              y[j]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${z[k]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    //***

    // z y x

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              x[i]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              x[i]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${y[j]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 1200
          });
        }
      }
    }

    return questions;
  },
  Easy() {
    const x = [2, 3];
    const y = [1, 2, 3];
    const z = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const questions = [];

    // x y z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              z[k]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              z[k]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * y[j] * z[k];
          questions.push({
            operation: `${x[i]} \\times ${y[j]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    //***

    // y z x
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              x[i]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              x[i]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * z[k] * x[i];
          questions.push({
            operation: `${y[j]} \\times ${z[k]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    //***

    // z x y
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              y[j]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              y[j]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * x[i] * y[j];
          questions.push({
            operation: `${z[k]} \\times ${x[i]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    //***

    // y x z
    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${this.underscore} \\times ${x[i]} \\times ${
              z[k]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${this.underscore} \\times ${
              z[k]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = y[j] * x[i] * z[k];
          questions.push({
            operation: `${y[j]} \\times ${x[i]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    //***

    // x z y

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${this.underscore} \\times ${z[k]} \\times ${
              y[j]
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${this.underscore} \\times ${
              y[j]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = x[i] * z[k] * y[j];
          questions.push({
            operation: `${x[i]} \\times ${z[k]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    //***

    // z y x

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${this.underscore} \\times ${y[j]} \\times ${
              x[i]
              } = ${correcta}`,
            correct: z[k].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${this.underscore} \\times ${
              x[i]
              } = ${correcta}`,
            correct: y[j].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
        for (let k = 0; k < z.length; k++) {
          const correcta = z[k] * y[j] * x[i];
          questions.push({
            operation: `${z[k]} \\times ${y[j]} \\times ${
              this.underscore
              } = ${correcta}`,
            correct: x[i].toString(),
            id: uuidv4(),
            rating: 800
          });
        }
      }
    }

    return questions;
  },
  all() {
    return this.Easy().concat(
      this.Intermediate(),
      this.Advanced()
    );
  }
};

// Total = 2268
// console.log(logic.all().length);
// let ejercicio = logic.all();
// let string = JSON.stringify(ejercicio);
// fs.writeFile(
//   "gamesJsonData/fifthGrade/math/find-the-missing-number-long-multiplications.json",
//   string,
//   function(err) {
//     if (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );
