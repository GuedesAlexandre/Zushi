<?php

namespace App\Entity;

use App\Repository\PossedeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PossedeRepository::class)
 */
class Possede
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity=alimments::class, inversedBy="id_possedes")
     */
    private $id_alimments;

    /**
     * @ORM\ManyToMany(targetEntity=box::class, inversedBy="id_possedes")
     */
    private $id_box;

    public function __construct()
    {
        $this->id_alimments = new ArrayCollection();
        $this->id_box = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, alimments>
     */
    public function getIdAlimments(): Collection
    {
        return $this->id_alimments;
    }

    public function addIdAlimment(alimments $idAlimment): self
    {
        if (!$this->id_alimments->contains($idAlimment)) {
            $this->id_alimments[] = $idAlimment;
        }

        return $this;
    }

    public function removeIdAlimment(alimments $idAlimment): self
    {
        $this->id_alimments->removeElement($idAlimment);

        return $this;
    }

    /**
     * @return Collection<int, box>
     */
    public function getIdBox(): Collection
    {
        return $this->id_box;
    }

    public function addIdBox(box $idBox): self
    {
        if (!$this->id_box->contains($idBox)) {
            $this->id_box[] = $idBox;
        }

        return $this;
    }

    public function removeIdBox(box $idBox): self
    {
        $this->id_box->removeElement($idBox);

        return $this;
    }
}
